import {ConversationsRepliesResponse} from '@slack/web-api'
import SimpleUser from '../types/SimpleUser'
import getUserByUserName from './getUserByUserName'
export default (thread: ConversationsRepliesResponse, users: SimpleUser[]) => {
	return JSON.stringify(
		thread.messages.map(t => ({
			text: t.text,
			user: getUserByUserName(users, t.user)?.real_name || 'Unknown'
		}))
	)
}
