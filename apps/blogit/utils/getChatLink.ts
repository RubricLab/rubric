import slackClient from "./slackClient";

export default async (message_ts: string, channel: string) => {
  return await slackClient.chat.getPermalink({
    channel,
    message_ts,
  });
};
