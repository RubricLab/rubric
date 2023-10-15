'use client'
import Link from 'next/link'
import Button from './Button'
import Title from './Title'

const Footer = () => {
	return (
		<div className='z-20 flex w-screen items-start justify-between gap-8 bg-black px-5 py-20 text-white sm:items-center sm:gap-0 sm:px-10'>
			<div className='flex flex-col gap-3'>
				<Link href='/'>
					<Title size='full' />
				</Link>
				<div className='flex flex-col gap-1'>
					<p className='font-2xl'> Let&apos;s make something amazing, together.</p>
				</div>
				<Button
					body='Get in touch'
					variant='dark'
					href='/contact'
					className='w-fit'
				/>
			</div>

			<div className='flex flex-col items-end'>
				<Link
					className='underline-offset-4 transition-all duration-300 hover:underline'
					href='/projects'>
					Projects
				</Link>
				<Link
					className='underline-offset-4 transition-all duration-300 hover:underline'
					href='/blog'>
					Blog
				</Link>
				<Link
					className='underline-offset-4 transition-all duration-300 hover:underline'
					href='/contact'>
					Contact
				</Link>
			</div>
		</div>
	)
}

export default Footer
