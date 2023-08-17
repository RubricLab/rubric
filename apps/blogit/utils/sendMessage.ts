import { ChatPostMessageArguments, WebClient } from "@slack/web-api";
import slackClient from "./slackClient";

export default async (
  payload: ChatPostMessageArguments["blocks"],
  channel: string
) => {
  return await slackClient.chat.postMessage({
    text: "Hey it's me, Blogit!",
    blocks: payload,
    channel: channel,
  });
};
