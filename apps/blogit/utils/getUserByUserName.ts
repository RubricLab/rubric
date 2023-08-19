import SimpleUser from '../types/SimpleUser'
const getUserByUserName = (users: SimpleUser[], userId: string) => users.find(u => u.id === userId)

export default getUserByUserName
