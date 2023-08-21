import {ComingSoonButton, Header} from '@rubriclab/ui'
import {ArrowUpRightIcon} from 'lucide-react'
import {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {DEFAULT_META, META} from '../../lib/constants'
import {parseDate} from '../../lib/utils'
import {getPosts} from '../../sanity/sanity-utils'
import {Post} from '../../types/sanity'

export const metadata: Metadata = {
	...DEFAULT_META,
	openGraph: {
		...DEFAULT_META.openGraph,
		title: `Blog | ${META.title}`
	},
	title: `Blog | ${META.title}`,
	twitter: {
		...DEFAULT_META.twitter,
		title: `Blog | ${META.title}`
	}
}

type PostCardProps = {
	post: Post
}

export const revalidate = 60 // revalidate this page every 60 seconds

// Blog post card
const PostCard = ({post}: PostCardProps) => {
	const date = parseDate(post.publishedAt)
	return (
		<Link
			className='bg-off-white/90 duration-400 group relative flex flex-col rounded-md border border-stone-700/80 text-black transition-colors hover:bg-orange-400/80'
			href={`/blog/${post.slug}`}
			key={post._id}>
			<ArrowUpRightIcon className='duration-400 absolute right-2 top-2 h-14 w-14 opacity-0 transition-opacity group-hover:opacity-100' />
			{/* Cover image */}
			<div className='relative h-40 w-full'>
				<Image
					alt='Blog cover image'
					className='duration-400 rounded-t-md transition-opacity group-hover:opacity-0'
					fill
					src={post.mainImage}
					style={{objectFit: 'cover', objectPosition: 'center'}}
				/>
			</div>
			{/* Post details */}
			<div className='flex flex-col p-5'>
				<p className='text-base text-stone-700'>{date}</p>
				<h3>{post.title}</h3>
			</div>
		</Link>
	)
}

export default async function Blog() {
	const posts = await getPosts()
	return (
		<div className='mt-20 flex h-full flex-col gap-10 2xl:justify-center'>
			<Header text='Blog' />
			{/* "Coming soon" if there are no posts */}
			{posts.length === 0 && (
				<div>
					<ComingSoonButton />
				</div>
			)}
			{/* Posts */}
			{posts.length > 0 && (
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
					{posts.map(post => (
						<PostCard
							key={post._id}
							post={post}
						/>
					))}
				</div>
			)}
		</div>
	)
}
