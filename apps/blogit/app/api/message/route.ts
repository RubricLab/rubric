import {NextResponse} from 'next/server'
import composeMessage from '../../../utils/composeMessage'
import createThreadContext from '../../../utils/createThreadContext'
import generateBlogPost from '../../../utils/generateBlogPostFromThread'
import getThread from '../../../utils/getThread'
import sendMessage from '../../../utils/sendMessage'

// import getUsers from '../../../utils/getUsers';
import users from '../../../const/users'
import getChatLink from '../../../utils/getChatLink'
import getUserByUserName from '../../../utils/getUserByUserName'

// export const runtime = 'edge'

export async function POST(request: Request) {
	const json = await request.json()

	console.log('ping: ', json.event.type)

	const {text, channel, thread_ts, user: authorId} = json.event

	// console.log(text, channel, thread_ts, author)

	// avoid recursion
	if (authorId === process.env.SLACK_BOT_ID) {
		console.log('author is bot')
		return new NextResponse('ok')
	}

	if (json.event.type !== 'message' || !text) {
		console.log('not a message')
		return new NextResponse('ok')
	}

	const isReferenced = new RegExp(['blogit', 'blog it'].join('|'), 'i').test(
		text
	)

	const isMentioned = text.includes(`<@${process.env.SLACK_BOT_ID}>`)

	const isBlogit = isReferenced || isMentioned

	// removed because of rate limiting
	// const users = await getUsers(json.event.channel)

	if (!isBlogit)
		// console.log('not blogit')
		return new NextResponse('ok')

	console.log('is blogit')

	if (!thread_ts)
		// console.log('not thread')
		return new NextResponse('ok')

	// console.log('is thread')

	const thread = await getThread(thread_ts, channel)
	const threadContext = createThreadContext(thread, users)

	// console.log(threadContext)

	const threadUrl = (await getChatLink(thread_ts, channel)).permalink

	// console.log(threadUrl)

	const author = getUserByUserName(users, authorId)

	// console.log(author)

	const blogPost = await generateBlogPost(threadContext, text, author)

	// const bannerImg = await generateImageFromDescription(blogPost.bannerImgDescription)

	// blogPost.bannerImgUrl = bannerImg.url

	blogPost.bannerImgUrl =
		'https://cdn.sanity.io/images/98ffjfuo/production/c4f4b2b486832d595a2fb5fccef4b3a46740115d-907x907.png?w=2000&fit=max&auto=format&dpr=2'

	const message = composeMessage({...blogPost, author}, threadUrl)

	await sendMessage(message, process.env.SLACK_BLOG_CHANNEL_ID || channel)

	return new NextResponse('ok')
}
