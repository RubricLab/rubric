import { ChatPostMessageArguments } from "@slack/web-api";
import BlogPost from "../types/BlogPost";

export default (blogPost: BlogPost, threadUrl: string) => {
    const blocks: ChatPostMessageArguments["blocks"] = [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `Hey <@${blogPost.author.id}>! It's me, <@${process.env.SLACK_BOT_ID}>! Here's a draft I created from <${threadUrl}|your thread>:`,
            },
        },
        {
            type: "divider"
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `${blogPost.emoji} *${blogPost.title}*\n\n${blogPost.summary}`,
                
            },
            accessory: {
                type: "image",
                image_url: blogPost.bannerImgUrl,
                alt_text: blogPost.bannerImgDescription || "Banner Img",
            }
        },
        {
            type: "divider"
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: blogPost.body
            },
        },
        {
            type: "divider"
        },
        {
            dispatch_action: true,
            type: "input",
            element: {
				type: "plain_text_input",
				dispatch_action_config: {
					trigger_actions_on: [
						"on_character_entered"
					]
				},
				action_id: "provide_feedback",
			},
			label: {
				type: "plain_text",
				text: "Provide feedback on this draft",
				emoji: true
			}
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: "<https://rubriclab.com/studio/desk/post|View in Rubric Studio>",
            }
        },
        {
            type: "divider",
        }
        
    ]

    return blocks
}

