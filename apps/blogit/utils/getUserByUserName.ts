import SimpleUser from '../types/SimpleUser'
export default (users: SimpleUser[], userId: string) => users.find(u => u.id === userId)
