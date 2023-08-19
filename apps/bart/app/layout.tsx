import '@rubriclab/ui/globals.css'
import localFont from 'next/font/local'
import NextImage from 'next/legacy/image'
import './styles.css'

const simpsonFont = localFont({
	src: '../public/fonts/Simpsonfont.ttf',
	variable: '--font-simpson'
})

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={`${simpsonFont.variable} bg-simpson-yellow relative flex h-full min-h-screen w-full flex-col items-center justify-center`}>
				<NextImage
					alt='bart'
					className='object-contain object-right-bottom'
					layout='fill'
					src='/bart.png'
				/>
				<div className='z-10 h-full w-full max-w-6xl p-5 pt-0'>{children}</div>
			</body>
		</html>
	)
}
