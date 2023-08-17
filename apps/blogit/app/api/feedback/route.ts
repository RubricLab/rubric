import { NextResponse } from "next/server";
import generateBlogPostWithFeedback from "../../../utils/generateBlogPostWithFeedback";
import createBlogPostContext from "../../../utils/createBlogPostContext";
import composeMessage from "../../../utils/composeMessage";
import updateMessage from "../../../utils/updateMessage";
import generateImageFromDescription from "../../../utils/generateImageFromDescription";
import SimpleUser from "../../../types/SimpleUser";

export async function POST(request: Request) {
  const json = await request.json();

  const author = { id: json.user.id, real_name: json.user.name };

  const channel = json.channel.id;

  const threadUrl = json.message.blocks[0].text.text
    .split("<")
    .slice(-1)[0]
    .split("|")[0];

  const titleSection = json.message.blocks[2];

  const emoji = titleSection.text.text.split(":")[1];

  const title = titleSection.text.text.split("*")[1];

  const summary = titleSection.text.text.split("\n\n")[1];

  const bannerImgUrl = titleSection.accessory.image_url;

  const bannerImgDescription = titleSection.accessory.alt_text;

  const body = json.message.blocks[4].text.text;

  const feedback = json.actions[0].value;

  if (
    !feedback ||
    !body ||
    !title ||
    !summary ||
    !bannerImgUrl ||
    !bannerImgDescription
  ) {
    return new NextResponse("ok");
  }

  const blogPostContext = createBlogPostContext({
    title,
    summary,
    body,
    emoji,
    bannerImgDescription,
    author,
  });

  const blogPost = await generateBlogPostWithFeedback(
    blogPostContext,
    feedback,
    author
  );

  // const newBannerImgUrl = blogPost.changeBannerImg === 'true' ? (await generateImageFromDescription(blogPost.bannerImgDescription)).url : bannerImgUrl

  const newBannerImgUrl = bannerImgUrl;

  const message = composeMessage(
    { ...blogPost, bannerImgUrl: newBannerImgUrl, author },
    threadUrl
  );

  await updateMessage(message, channel, json.message.ts);

  return new NextResponse("ok");
}
