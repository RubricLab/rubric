import {ArrowUpRight} from 'lucide-react'
import Link from 'next/link'
import Button from './Button'

function Card({
	title,
	desc,
	href
}: {
	title: string
	desc: string
	href: string
}) {
	return (
		<div className='flex gap-3 rounded-md bg-black/50 p-10 text-white sm:flex-row sm:items-center sm:gap-5'>
			<div className='flex flex-col gap-3 sm:w-3/4 sm:flex-row sm:gap-5'>
				<p className='text-2xl sm:w-1/3'>{title}</p>
				<p className='text-lg sm:w-2/3'>{desc}</p>
			</div>
			<div className='flex items-center justify-center sm:w-1/4'>
				<Link
					className='group h-fit rounded-md bg-black p-5 text-inherit'
					href={href}>
					<ArrowUpRight className='transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
				</Link>
			</div>
		</div>
	)
}

const projects = [
	{
		title: 'Cal.ai',
		desc: 'AI email assistant to manage your meetings.',
		href: 'https://cal.ai/'
	},
	{
		title: 'Maige',
		desc: 'Bot that labels your GitHub issues using AI.',
		href: 'https://maige.app/'
	},
	{
		title: 'Neat',
		desc: 'Unified inbox for developer notifications. Used by 3000+ developers.',
		href: 'https://neat.run/'
	}
]

export default function Projects() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-[#1C1F23] to-[#14171A] p-8'>
			<h1 className='text-white'>_featured projects</h1>
			<div className='flex max-w-4xl flex-col gap-5'>
				{projects.map(project => (
					<Card
						key={project.title}
						title={project.title}
						desc={project.desc}
						href={project.href}
					/>
				))}
			</div>
			<Button
				body='Learn more'
				variant='teal'
				href='/projects'
			/>
		</div>
	)
}
