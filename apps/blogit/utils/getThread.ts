import slackClient from './slackClient'

export default async (thread_ts: string, channel: string) => {
	return await slackClient.conversations.replies({
		channel: channel,
		ts: thread_ts
	})
}
