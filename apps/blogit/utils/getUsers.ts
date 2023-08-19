import slackClient from './slackClient'

const getUsers = async (channel: string) => {
	return (
		await slackClient.users.list({
			channel: channel
		})
	).members
}

export default getUsers
