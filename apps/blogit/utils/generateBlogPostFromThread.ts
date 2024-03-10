import {ChatCompletionResponseMessageRoleEnum} from 'openai-edge'
import blogPostFromThreadSystemMessage from '../const/blogPostFromThreadSystemMessage'
import BlogPost from '../types/BlogPost'
import SimpleUser from '../types/SimpleUser'
import openAiClient from './openAiClient'

const generateBlogPostFromThread = async (
	threadContext: string,
	prompt: string,
	author: SimpleUser
) => {
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
		function_call: {name: 'composeBlogPost'},
		functions: [
			{
				description: 'composes a blog post from its components',
				name: 'composeBlogPost',
				parameters: {
					properties: {
						bannerImgDescription: {
							description:
								'A description of the banner image, which is a visual representation of themese in the blog post. Low fi, no text, abstract',
							type: 'string'
						},
						body: {
							description:
								'The body of the blog post in slack flavoured markdown. 4 paragraphs max.',
							type: 'string'
						},
						emoji: {
							description: 'An emoji that represents the blog post. For example: 😅',
							type: 'string'
						},
						summary: {
							description: 'A short summary of the blog post',
							type: 'string'
						},
						title: {
							description: 'A short description of the blog post',
							type: 'string'
						}
					},
					required: ['title', 'summary', 'body', 'bannerImgDescription', 'emoji'],
					type: 'object'
				}
			}
		],
		messages,
		model: 'gpt-4'
	})

	const json = await response.json()

	const blogPost = json.choices[0].message.function_call.arguments.replace(
		/\n\n/g,
		'\\n\\n'
	)

	try {
		return JSON.parse(blogPost) as BlogPost
	} catch (e) {
		console.error(e)
		console.log(blogPost)
		throw new Error('Failed to generate blog post from thread')
	}
}

export default generateBlogPostFromThread
