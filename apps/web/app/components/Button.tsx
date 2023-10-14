'use client'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'

const variants = {
	dark: 'border-2 border-black border-opacity-20 bg-[#121519] text-white',
	light: 'bg-orange-100 text-black',
	teal: 'bg-[#A8CFCF] text-black'
}

export default function Button({
	body,
	variant,
	href,
	onClick
}: {
	body: string
	variant: 'dark' | 'light' | 'teal'
	href?: string
	onClick?: () => void
}) {
	// Link
	if (href)
		return (
			<Link
				className={`group flex w-fit items-center justify-between gap-20 rounded-md ${variants[variant]} px-5 py-3`}
				href={href}>
				<span className='font-neue-bit text-2xl'>{body}</span>
				<ArrowRight className='transition-all duration-300 group-hover:translate-x-1.5' />
			</Link>
		)
	if (onClick)
		return (
			<button
				onClick={onClick}
				className={`group flex w-fit items-center justify-between gap-20 rounded-md ${variants[variant]} px-5 py-3`}>
				<span className='font-neue-bit text-2xl'>{body}</span>
				<ArrowRight className='transition-all duration-300 group-hover:translate-x-1.5' />
			</button>
		)
}
