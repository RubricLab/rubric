'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {META} from '../../lib/constants'

export default function NavBar() {
	const pathname = usePathname()

	if (pathname.includes('/studio')) return <></>

	return (
		<nav className='absolute left-[50%] top-0 z-20 flex w-full -translate-x-1/2 flex-col gap-1 p-5 sm:px-10'>
			<div
				className={`${
					pathname === '/' ? 'justify-end' : 'justify-between'
				} flex text-lg text-orange-600 sm:text-2xl lg:text-3xl`}>
				{pathname !== '/' && (
					<Link
						className='font-neue-bit font-bold text-black'
						href='/'>
						Rubric
					</Link>
				)}
				<div className='flex items-baseline gap-5 text-lg sm:gap-10 sm:text-2xl'>
					<Link
						className='font-light'
						href='/projects'>
						Projects
					</Link>
					<Link
						className='font-light'
						href='/blog'>
						Blog
					</Link>
					{/* <Link
						className='font-light'
						href='/stories'>
						Stories
					</Link> */}
					<Link
						className='font-light'
						href={META.githubURL}>
						GitHub
					</Link>
				</div>
			</div>
		</nav>
	)
}
