import slackClient from './slackClient'

const getThread = async (thread_ts: string, channel: string) => {
	return await slackClient.conversations.replies({
		channel: channel,
		ts: thread_ts
	})
}

export default getThread
