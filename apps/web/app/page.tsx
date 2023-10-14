import Image from 'next/image'
import {getMetadata} from '../lib/utils'
import {getHomePageCopy} from '../sanity/sanity-utils'
import {Author} from '../types/sanity'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'

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
			<Hero />
			<Projects />
			<Services />
		</div>
	)
}
