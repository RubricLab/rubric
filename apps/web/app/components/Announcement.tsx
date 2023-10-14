import {ArrowUpRight} from 'lucide-react'
import Link from 'next/link'

export default function Announcement() {
	return (
		<Link
			className='group flex items-center gap-2 rounded-full border-2 border-orange-300 bg-orange-100 px-5 py-3'
			href='https://cal.ai'>
			<p>
				<span className='font-semibold'>New:</span> Check out our launch with Cal.ai
			</p>
			<ArrowUpRight className='transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
		</Link>
	)
}
