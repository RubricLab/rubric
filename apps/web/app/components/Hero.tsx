'use client'
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import Announcement from './Announcement'
import Game from './game'

export default function Hero() {
	const [start, setStart] = useState(false)

	useEffect(() => {
		setTimeout(() => setStart(true), 3 * 1000)
	}, [])
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-5 p-8'>
			<div className={!start && 'animate-pulse'}>
				<Game
					running={start}
					setRunning={setStart}
				/>
			</div>
			<AnimatePresence>
				{start && (
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{duration: 3, delay: 2}}
						className='flex w-full flex-col items-center gap-10'>
						<Announcement />
						<div className='flex flex-col items-center gap-5'>
							<p className='max-w-2xl text-center text-4xl sm:text-5xl'>
								We&apos;re a digital studio making{' '}
								<span className='font-neue-bit text-7xl'>ai-first</span> software.
							</p>
							<p className='invisible sm:visible'>
								Press{' '}
								<span className='mx-1 rounded-md bg-black px-3 py-2 text-white'>R</span>{' '}
								anytime to get started
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
