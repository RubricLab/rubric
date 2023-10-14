import {ArrowRight} from 'lucide-react'

export default function ContactButton({variant}: {variant: 'dark' | 'light'}) {
	return (
		<button
			className={`group flex w-fit items-center justify-between gap-20 rounded-md ${
				variant === 'dark'
					? 'border-2 border-black border-opacity-20 bg-[#121519]'
					: 'bg-orange-100'
			} px-5 py-3`}>
			<span className='font-neue-bit text-2xl'>Get in touch</span>
			<ArrowRight className='transition-all duration-300 group-hover:translate-x-1.5' />
		</button>
	)
}
