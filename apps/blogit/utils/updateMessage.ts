import {ChatPostMessageArguments} from '@slack/web-api'
import slackClient from './slackClient'

const updateMessage = async (payload: ChatPostMessageArguments['blocks'], channel: string, message_ts: string) => {
	return await slackClient.chat.update({
		blocks: payload,
		channel: channel,
		text: "Hey it's me, Blogit!",
		ts: message_ts
	})
}

export default updateMessage
