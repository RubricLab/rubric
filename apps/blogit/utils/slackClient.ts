import { WebClient } from '@slack/web-api';
export default new WebClient(process.env.SLACK_BOT_TOKEN);
