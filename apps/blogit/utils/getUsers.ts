import slackClient from "./slackClient"


export default async (channel: string) => {
    return (await slackClient.users.list({
        channel: channel,
    })).members
}