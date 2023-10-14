export default function Hero() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-5'>
			<p className='max-w-2xl text-center text-4xl sm:text-5xl'>
				We&apos;re a digital studio making{' '}
				<span className='font-neue-bit text-7xl'>ai-first</span> software.
			</p>
			<p>
				Press <span className='mx-1 rounded-md bg-orange-100 px-3 py-2'>R</span>{' '}
				anytime to get started
			</p>
		</div>
	)
}
