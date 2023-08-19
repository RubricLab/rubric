import slackClient from './slackClient'

const getChatLink = async (message_ts: string, channel: string) => {
	return await slackClient.chat.getPermalink({
		channel,
		message_ts
	})
}

export default getChatLink
