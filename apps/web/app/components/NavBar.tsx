'use client'
import Link from 'next/link'
import Button from './Button'
import Logo from './Logo'

export default function NavBar() {
	return (
		<nav className='absolute left-[50%] top-0 z-20 flex w-full -translate-x-1/2 items-center justify-between gap-1 p-5 sm:px-10'>
			<Link
				href='/'
				className='text-inherit'>
				<Logo />
			</Link>
			<Button
				body='Get in touch'
				variant='light'
				href='/contact'
			/>
		</nav>
	)
}
