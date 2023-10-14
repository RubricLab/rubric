import {ArrowRight, ArrowUpRight} from 'lucide-react'
import Link from 'next/link'

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
		<div className='flex items-center rounded-md bg-black/50 p-10 text-white'>
			<p className='w-1/4 text-2xl'>{title}</p>
			<p className='w-1/2 text-lg'>{desc}</p>
			<div className='flex w-1/4 justify-center'>
				<Link
					className='group rounded-md bg-black p-5 text-inherit'
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
		title: 'Archetype',
		desc: 'Component library and landing page.',
		href: 'https://archetype.dev/'
	},
	{
		title: 'Neat',
		desc: 'Unified inbox for developer notifications. Used by 3000+ developers.',
		href: 'https://neat.run/'
	}
]

export default function Projects() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-[#1C1F23] to-[#14171A]'>
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
			<Link
				href='/projects'
				className='font-neue-bit group flex items-center justify-between gap-10 rounded-md bg-[#A8CFCF] px-5 py-3'>
				<span className='font-neue-bit text-2xl text-black'>Learn more</span>
				<ArrowRight className='text-black transition-all duration-300 group-hover:translate-x-1.5' />
			</Link>
		</div>
	)
}
