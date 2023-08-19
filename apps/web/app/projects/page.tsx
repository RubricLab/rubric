import {ArrowUpRightIcon} from 'lucide-react'
import {Metadata} from 'next'
import Link from 'next/link'
import {DEFAULT_META, META} from '../../lib/constants'
import {getProjects} from '../../sanity/sanity-utils'
import {Project} from '../../types/sanity'

export const metadata: Metadata = {
	...DEFAULT_META,
	openGraph: {
		...DEFAULT_META.openGraph,
		title: `Projects | ${META.title}`
	},
	title: `Projects | ${META.title}`,
	twitter: {
		...DEFAULT_META.twitter,
		title: `Projects | ${META.title}`
	}
}

type ProjectCardProps = {
	project: Project
}

const ProjectCard = ({project}: ProjectCardProps) => {
	return (
		<Link
			className='bg-off-white/90 group flex w-full rounded-md border border-stone-700/80 px-6 py-5 text-black transition-colors duration-300 hover:bg-orange-400/80'
			href={project.url}
			target='_blank'>
			<div className='flex w-full items-center justify-between'>
				{/* Name */}
				<h3>{project.name}</h3>
				<ArrowUpRightIcon className='h-10 w-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
			</div>
		</Link>
	)
}

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Projects() {
	const projects = await getProjects()
	return (
		<div className='mt-20 flex h-full flex-col gap-10 2xl:justify-center'>
			<h1>Projects</h1>
			{/* Projects */}
			<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:pb-5'>
				{projects.map((project: Project) => (
					<ProjectCard
						key={project._id}
						project={project}
					/>
				))}
			</div>
		</div>
	)
}
