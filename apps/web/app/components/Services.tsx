import {ArrowUpIcon} from 'lucide-react'

const sections = [
	{
		title: 'Our goal is to turn your ideas into pixel-perfect reality.',
		desc:
			'We are speedy, efficient, and cover everything from wireframes to code.',
		icon: <ArrowUpIcon className='h-10 w-10' />
	},
	{
		title: 'Got a concept? We are here to make it shine.',
		desc:
			'User experience? That is our jam. We build cool, intuitive digital spaces your users would not want to leave.',
		icon: <ArrowUpIcon className='h-10 w-10' />
	},
	{
		title: 'Our home turf is frontend but we are game for everything.',
		desc:
			'Full-stack desktop, mobile apps, you name it. Years spent in the startup world have given us street-smarts. We have learned the ropes and can turn your vision into the next big thing. We partner with a few select clients each quarter, giving them our full attention.',
		icon: <ArrowUpIcon className='h-10 w-10' />
	}
]

export default function Services() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-40 bg-white p-8'>
			{sections.map(section => (
				<div
					key={section.title}
					className='flex flex-col items-center gap-5 text-center'>
					<span className='bg-teal rounded-full p-3'>{section.icon}</span>
					<div className='flex flex-col gap-3'>
						<h2>{section.title}</h2>
						<p>{section.desc}</p>
					</div>
				</div>
			))}
		</div>
	)
}
