import { ChatPostMessageArguments } from "@slack/web-api";
import slackClient from "./slackClient";

export default async (
  payload: ChatPostMessageArguments["blocks"],
  channel: string,
  message_ts: string
) => {
  return await slackClient.chat.update({
    text: "Hey it's me, Blogit!",
    blocks: payload,
    channel: channel,
    ts: message_ts,
  });
};
