'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
import Button from './Button'
import Logo from './Logo'

export default function NavBar() {
	const router = useRouter()

	useEffect(() => {
		// Get started with R
		const handleKeyboardEvent = (event: KeyboardEvent) => {
			if (['r', 'R'].includes(event.key)) router.push('/contact')
		}
		// Add event listener
		window.addEventListener('keydown', handleKeyboardEvent)
		// Clean up event listener
		return () => window.removeEventListener('keydown', handleKeyboardEvent)
	}, [])

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
