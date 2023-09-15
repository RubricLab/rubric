import {PortableText} from '@portabletext/react'
import {ContactButton} from '@rubriclab/ui'
import {ArrowUpRightIcon} from 'lucide-react'
import Link from 'next/link'
import {getMetadata} from '../../lib/utils'
import {getProjects} from '../../sanity/sanity-utils'
import {Project} from '../../types/sanity'

export const metadata = getMetadata({title: 'Projects'})

type ProjectCardProps = {
	project: Project
}

export const ProjectCard = ({project: {url, name, content}}: ProjectCardProps) => (
	<Link
		className='bg-off-white group relative w-full rounded-xl border p-10 opacity-90 shadow-2xl transition-opacity hover:!opacity-100'
		href={url}
		target='_blank'>
		<ArrowUpRightIcon className='absolute right-0 top-0 h-32 w-32 opacity-0 transition-opacity group-hover:opacity-20' />
		<div className='w-full space-y-4 text-black/60 transition-colors group-hover:text-orange-500'>
			<h2>{name}</h2>
			<PortableText value={content} />
		</div>
	</Link>
)

export const revalidate = 60 // revalidate this page every 60 seconds

const Projects = async () => {
	const projects = await getProjects()
	return (
		<div className='mt-28 flex h-full flex-col gap-10 2xl:justify-center'>
			<h1>Projects</h1>
			<div className='mx-auto flex max-w-xl flex-col items-center gap-5 py-10'>
				{projects.map((project: Project) => (
					<ProjectCard
						key={project._id}
						project={project}
					/>
				))}
				<ContactButton
					body='Want to be on the list?'
					className='my-10'
				/>
			</div>
		</div>
	)
}

export default Projects
