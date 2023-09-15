import {PortableText} from '@portabletext/react'
import {ContactButton, Header} from '@rubriclab/ui'
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
				<span className='text-base text-gray-100'>{member.name}</span> <span className='text-sm text-gray-300'>{member.title}</span>
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
			<div className='flex min-h-screen flex-col justify-end gap-5 pb-10'>
				<Header text={result.hero.title} />
				<p className='max-w-2xl text-4xl font-extralight sm:text-5xl'>{result.hero.subtitle}</p>
			</div>

			{/* Section */}
			<div className='flex min-h-screen flex-col items-end justify-end gap-3 pb-5'>
				<div className='flex max-w-xl flex-col gap-10 pb-10'>
					{/* Team */}
					<div className='flex justify-between'>
						{result.team.map(member => (
							<TeamMemberCard
								key={member._key}
								member={member}
							/>
						))}
					</div>

					{/* What we do */}
					<div className='flex flex-col gap-5 text-2xl font-light'>
						<PortableText value={result.desc} />
						<ContactButton
							body='hello@rubriclab.com'
							className='mt-5'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
