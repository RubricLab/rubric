import {ChatPostMessageArguments} from '@slack/web-api'
import BlogPost from '../types/BlogPost'

const composeMessage = (blogPost: BlogPost, threadUrl: string) => {
	const blocks: ChatPostMessageArguments['blocks'] = [
		{
			text: {
				text: `Hey <@${blogPost.author.id}>! It's me, <@${process.env.SLACK_BOT_ID}>! Here's a draft I created from <${threadUrl}|your thread>:`,
				type: 'mrkdwn'
			},
			type: 'section'
		},
		{
			type: 'divider'
		},
		{
			accessory: {
				alt_text: blogPost.bannerImgDescription || 'Banner Img',
				image_url: blogPost.bannerImgUrl,
				type: 'image'
			},
			text: {
				text: `${blogPost.emoji} *${blogPost.title}*\n\n${blogPost.summary}`,
				type: 'mrkdwn'
			},
			type: 'section'
		},
		{
			type: 'divider'
		},
		{
			text: {
				text: blogPost.body,
				type: 'mrkdwn'
			},
			type: 'section'
		},
		{
			type: 'divider'
		},
		{
			dispatch_action: true,
			element: {
				action_id: 'provide_feedback',
				dispatch_action_config: {
					trigger_actions_on: ['on_character_entered']
				},
				type: 'plain_text_input'
			},
			label: {
				emoji: true,
				text: 'Provide feedback on this draft',
				type: 'plain_text'
			},
			type: 'input'
		},
		{
			text: {
				text: '<https://rubriclab.com/studio/desk/post|View in Rubric Studio>',
				type: 'mrkdwn'
			},
			type: 'section'
		},
		{
			type: 'divider'
		}
	]

	return blocks
}

export default composeMessage
