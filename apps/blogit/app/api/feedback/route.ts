import { NextResponse } from 'next/server';
import generateBlogPostWithFeedback from '../../../utils/generateBlogPostWithFeedback';
import createBlogPostContext from '../../../utils/createBlogPostContext';
import composeMessage from '../../../utils/composeMessage';
import updateMessage from '../../../utils/updateMessage';
import generateImageFromDescription from '../../../utils/generateImageFromDescription';

export async function POST(request: Request) {
   
    const json = await request.json()

    const author = json.user.name

    const channel = json.channel.id

    const titleSection = json.message.blocks[2]

    const emoji = titleSection.text.text.split(':')[1]

    const title = titleSection.text.text.split('*')[1]

    const summary = titleSection.text.text.split('\n\n')[1]

    const bannerImgUrl = titleSection.accessory.image_url

    const bannerImgDescription = titleSection.accessory.alt_text

    const body = json.message.blocks[4].text.text

    const feedback = json.actions[0].value

    if (!feedback || !body || !title || !summary || !bannerImgUrl || !bannerImgDescription) {
        return new NextResponse('ok')
    }

    const blogPostContext = createBlogPostContext({ title, summary, body, emoji, bannerImgDescription })

    const blogPost = await generateBlogPostWithFeedback(blogPostContext, feedback, author)

    // const newBannerImgUrl = blogPost.changeBannerImg === 'true' ? (await generateImageFromDescription(blogPost.bannerImgDescription)).url : bannerImgUrl

    const newBannerImgUrl = bannerImgUrl

    const message = composeMessage({ ...blogPost, bannerImgUrl: newBannerImgUrl })

    await updateMessage(message, channel, json.message.ts)

    return new NextResponse('ok')
}
