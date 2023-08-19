import {ChatPostMessageArguments} from '@slack/web-api'
import slackClient from './slackClient'

const sendMessage = async (payload: ChatPostMessageArguments['blocks'], channel: string) => {
	return await slackClient.chat.postMessage({
		blocks: payload,
		channel: channel,
		text: "Hey it's me, Blogit!"
	})
}

export default sendMessage
