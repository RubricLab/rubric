import Link from 'next/link'

export default function Services() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-white p-8'>
			<div className='flex flex-col gap-8'>
				<div className='flex w-full flex-col gap-5'>
					<h1 className='text-3xl'>A note to the builders.</h1>
					<p>Our goal is to turn your ideas into pixel-perfect reality.</p>
					<p>
						We are speedy, efficient, and cover everything from wireframes to code.
					</p>
					<p>Got a concept? We are here to make it shine.</p>
				</div>

				<div className='flex w-full flex-col gap-2 '>
					<p className='text-base italic'>Signed,</p>
					<p className='font-semibold'>
						<Link
							className='underline-offset-4 hover:underline'
							href='https://twitter.com/dexterstorey'>
							Dex
						</Link>
						,{' '}
						<Link
							className='underline-offset-4 hover:underline'
							href='https://twitter.com/sarimrmalik'>
							Sarim
						</Link>
						, and{' '}
						<Link
							className='underline-offset-4 hover:underline'
							href='https://twitter.com/tedspare'>
							Ted
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	)
}
