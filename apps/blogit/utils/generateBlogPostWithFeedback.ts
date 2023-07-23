import { ChatCompletionResponseMessageRoleEnum } from 'openai-edge'
import openAiClient from './openAiClient'
import blogPostWithFeedbackSystemMessage from '../const/blogPostWithFeedbackSystemMessage'
import UpdatedBlogPost from '../types/UpdatedBlogPost'


export default async (blogPostContext: string, feedback: string, author: string) => {

    // System message
    const messages = [
        {
            content: blogPostWithFeedbackSystemMessage,
            role: ChatCompletionResponseMessageRoleEnum.System
        },
        {
            content: `The following context is the blogPost: ${blogPostContext}`,
            role: ChatCompletionResponseMessageRoleEnum.System
        },
        {
            content: `Hey it's ${author}. Can you please modify the blog post with the following feedback: ${feedback}`,
            role: ChatCompletionResponseMessageRoleEnum.User
        },
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
                        description: 'An emoji that represents the blog post. For example: 😅. Even if the emoji passed is passed as text "musical_score", always replace it with the actual emoji 🎼',
                    },
                    changeBannerImg: {
                        type: 'string',
                        description: 'true/false. Whether to change the banner image or not. Most often false.',
                    }
                },
                required: ['title', 'summary', 'body', 'bannerImgDescription', 'emoji', 'changeBannerImg']
            }
        }],
        function_call: { name: "composeBlogPost" },
    })

    return JSON.parse((await response.json()).choices[0].message.function_call.arguments) as UpdatedBlogPost
}