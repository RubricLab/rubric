import { NextResponse } from 'next/server';
import sendMessage from '../../../../utils/sendMessage';
import getThread from '../../../../utils/getThread';
import composeMessage from '../../../../utils/composeMessage';
import generateBlogPost from '../../../../utils/generateBlogPostFromThread';
import createThreadContext from '../../../../utils/createThreadContext';
import generateImageFromDescription from '../../../../utils/generateImageFromDescription';

// import getUsers from '../../../utils/getUsers';
import users from '../../../../const/users'

// export const runtime = 'edge'

export async function POST(request: Request) {

    // respond with challenge parameter on setup for slack verif
    const json = await request.json()

    if (json.challenge) {
        return new NextResponse(json.challenge);
    }

    console.log('ping: ', json.event.type)

    const { text, channel, thread_ts, user: author } = json.event

    // avoid recursion
    if (author === process.env.SLACK_BOT_ID) {
        console.log('author is bot')
        return new NextResponse('ok')
    }
    
    
    if (json.event.type !== 'message' || !text) {
        console.log('not a message')
        return new NextResponse('ok')
    }

    const isReferenced = (new RegExp(['blogit','blog it'].join('|'), "i")).test(text)

    const isMentioned = text.includes(`<@${process.env.SLACK_BOT_ID}>`)

    const isBlogit = isReferenced || isMentioned

    // removed because of rate limiting
    // const users = await getUsers(json.event.channel)

    if (!isBlogit) {
        console.log('not blogit')
        return new NextResponse('ok')
    }

    console.log('is blogit')
    
    if (!thread_ts) {
        console.log('not thread')
        return new NextResponse('ok')
    }

    console.log('is thread')

    const core = async () => {

        const thread = await getThread(thread_ts, channel)
        const threadContext = createThreadContext(thread, users)


        const blogPost = await generateBlogPost(threadContext, text, author)

        const bannerImg = await generateImageFromDescription(blogPost.bannerImgDescription)

        blogPost.bannerImgUrl = bannerImg.url

        const message = composeMessage(blogPost)

        await sendMessage(message, channel)
    }

    core()

    return new NextResponse('ok')
}