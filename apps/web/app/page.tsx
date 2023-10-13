import {ArrowUpRight} from 'lucide-react'
import Image from 'next/image'
import {getMetadata} from '../lib/utils'
import {getHomePageCopy} from '../sanity/sanity-utils'
import {Author} from '../types/sanity'

export const metadata = getMetadata({title: 'Home'})

type TeamMemberCardProps = {
	member: Author
}

const TeamMemberCard = ({member}: TeamMemberCardProps) => {
	return (
		<div
			className='group relative h-20 w-20 cursor-pointer sm:h-40 sm:w-40'
			key={member.name}>
			<div className='relative h-full w-full'>
				<Image
					alt={`${member.name}'s picture`}
					className='rounded-full grayscale group-hover:blur-sm'
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					src={member.image}
				/>
			</div>
			<p className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
				<span className='text-base text-gray-100'>{member.name}</span>{' '}
				<span className='text-sm text-gray-300'>{member.title}</span>
			</p>
		</div>
	)
}

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Home() {
	const result = await getHomePageCopy()
	return (
		<div className='flex flex-col'>
			{/* Section: Hero */}
			<div className='flex min-h-screen flex-col items-center justify-center gap-5'>
				<p className='max-w-2xl text-center text-4xl sm:text-5xl'>
					We&apos;re a digital studio making{' '}
					<span className='font-neue-bit text-7xl'>ai-first</span> software.
				</p>
				<p>
					Press <span className='mx-1 rounded-md bg-orange-100 px-3 py-2'>R</span> to
					get started
				</p>

				{/* <div className='relative h-[50vh] w-full'>
					<Image
						src='/images/iMac.png'
						alt='iMac with a picture of a desert'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						style={{objectFit: 'cover', objectPosition: 'center'}}
					/>
				</div> */}
			</div>

			{/* Section: Featured projects */}
			<div className='flex min-h-screen flex-col items-center justify-center gap-5 bg-gradient-to-b from-[#1C1F23] to-[#14171A]'>
				<h1 className='text-white'>_featured projects</h1>
				<div className='flex max-w-4xl flex-col'>
					<div className='flex items-center rounded-md bg-black/50 p-10 text-white'>
						<p className='w-1/4 text-3xl'>Neat</p>
						<p className='w-1/2 text-lg'>
							Unified inbox for developer notifications. Used by 3000+ developers.
						</p>
						<div className='flex w-1/4 justify-center'>
							<button className='rounded-md bg-black p-5'>
								<ArrowUpRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
