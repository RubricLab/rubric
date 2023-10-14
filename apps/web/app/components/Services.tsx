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
		<div className='flex min-h-screen flex-col items-center justify-center bg-white p-8'>
			<div className='flex flex-col gap-5'>
				<h1 className='text-3xl'>A note to the ambitious ones.</h1>
				<p>Our goal is to turn your ideas into pixel-perfect reality.</p>
				<p>
					We are speedy, efficient, and cover everything from wireframes to code.
				</p>
				<p>Got a concept? We are here to make it shine.</p>
			</div>
		</div>
	)
}
