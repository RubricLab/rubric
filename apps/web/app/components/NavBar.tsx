'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function NavBar() {
	const pathname = usePathname()

	return (
		<nav className='absolute left-[50%] top-0 z-20 flex w-full max-w-6xl -translate-x-1/2 flex-col gap-1 p-5'>
			<div className={`${pathname === '/' ? 'justify-end' : 'justify-between'} flex text-lg text-orange-600 sm:text-2xl lg:text-3xl`}>
				{pathname !== '/' && (
					<Link
						href='/'
						className='font-bold text-black'>
						Rubric
					</Link>
				)}

				<div className='flex gap-4'>
					<Link
						href='/projects'
						className='font-light hover:opacity-80'>
						Projects
					</Link>
					<Link
						href='/blog'
						className='font-light'>
						Blog
					</Link>
				</div>
			</div>

			{pathname === '/' && (
				<div className='flex flex-col items-end'>
					<span className='text-sm font-thin sm:text-base lg:text-lg'>© Rubric Labs Inc.</span>
				</div>
			)}
		</nav>
	)
}
