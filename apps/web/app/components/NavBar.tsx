'use client'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'

export default function NavBar() {
	return (
		<nav className='absolute left-[50%] top-0 z-20 flex w-full -translate-x-1/2 items-center justify-between gap-1 p-5 sm:px-10'>
			<Link
				href='/'
				className='text-inherit'>
				<Logo />
			</Link>
			<button className='flex w-fit items-center justify-between gap-20 rounded-md bg-orange-100 p-3 '>
				<span className='font-neue-bit text-2xl'>Get in touch</span>
				<ArrowRight />
			</button>
		</nav>
	)
}
