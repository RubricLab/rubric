import {ChatCompletionResponseMessageRoleEnum} from 'openai-edge'
import blogPostWithFeedbackSystemMessage from '../const/blogPostWithFeedbackSystemMessage'
import SimpleUser from '../types/SimpleUser'
import UpdatedBlogPost from '../types/UpdatedBlogPost'
import openAiClient from './openAiClient'

const generateBlogPostWithFeedback = async (blogPostContext: string, feedback: string, author: SimpleUser) => {
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
			content: `Hey it's ${author.real_name}. Can you please modify the blog post with the following feedback: ${feedback}`,
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
							description: 'A description of the banner image, which is a visual representation of themese in the blog post. Low fi, no text, abstract',
							type: 'string'
						},
						body: {
							description: 'The body of the blog post in slack flavoured markdown. 4 paragraphs max.',
							type: 'string'
						},
						changeBannerImg: {
							description: 'true/false. Whether to change the banner image or not. Most often false.',
							type: 'string'
						},
						emoji: {
							description: 'An emoji that represents the blog post. For example: 😅. Even if the emoji passed is passed as text "musical_score", always replace it with the actual emoji 🎼',
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
					required: ['title', 'summary', 'body', 'bannerImgDescription', 'emoji', 'changeBannerImg'],
					type: 'object'
				}
			}
		],
		messages,
		model: 'gpt-4'
	})

	return JSON.parse((await response.json()).choices[0].message.function_call.arguments) as UpdatedBlogPost
}

export default generateBlogPostWithFeedback
