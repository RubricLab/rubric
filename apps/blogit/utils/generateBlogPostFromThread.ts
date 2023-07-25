import { ChatCompletionResponseMessageRoleEnum } from 'openai-edge'
import BlogPost from '../types/BlogPost'
import openAiClient from './openAiClient'
import blogPostFromThreadSystemMessage from '../const/blogPostFromThreadSystemMessage'
import SimpleUser from '../types/SimpleUser'


export default async (threadContext: string, prompt: string, author: SimpleUser) => {

    // System message
    const messages = [
        {
            content: blogPostFromThreadSystemMessage,
            role: ChatCompletionResponseMessageRoleEnum.System
        },
        {
            content: `The following context is the chat history of the thread: ${threadContext}`,
            role: ChatCompletionResponseMessageRoleEnum.System
        },
        {
            content: `Hey it's ${author.real_name}. Can you please write a short draft blog from this thread?`,
            role: ChatCompletionResponseMessageRoleEnum.User
        },
        {
            content: `${prompt}`,
            role: ChatCompletionResponseMessageRoleEnum.User
        }
    ]

    const response = await openAiClient.createChatCompletion({
        model: 'gpt-4',
        messages,
        functions: [{
            name: "composeBlogPost",
            description: "composes a blog post from its components",
            parameters: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: 'A short description of the blog post',
                    },
                    summary: {
                        type: 'string',
                        description: 'A short summary of the blog post',
                    },
                    body: {
                        type: 'string',
                        description: 'The body of the blog post in slack flavoured markdown. 4 paragraphs max.',
                    },
                    bannerImgDescription: {
                        type: 'string',
                        description: 'A description of the banner image, which is a visual representation of themese in the blog post. Low fi, no text, abstract',
                    },
                    emoji: {
                        type: 'string',
                        description: 'An emoji that represents the blog post. For example: 😅',
                    }
                },
                required: ['title', 'summary', 'body', 'bannerImgDescription', 'emoji']
            }
        }],
        function_call: {name: "composeBlogPost"},
    })

    const json = await response.json()

    const blogPost = json.choices[0].message.function_call.arguments.replace(/\n\n/g, "\\n\\n")

    try {

        return JSON.parse(blogPost) as BlogPost

    } catch (e) {

        console.error(e)
        console.log(blogPost)
        throw new Error('Failed to generate blog post from thread')
        
    }
}