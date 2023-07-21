import {ConversationsRepliesResponse, UsersListResponse} from '@slack/web-api'
import getUserByUserName from './getUserByUserName'
import SimpleUser from '../types/SimpleUser'
export default (thread: ConversationsRepliesResponse,  users: SimpleUser[]) => {
    return JSON.stringify(thread.messages.map(t => ({
        text: t.text,
        user: getUserByUserName(users, t.user)?.real_name || 'Unknown',
    })))
}