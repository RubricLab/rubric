import '@rubriclab/ui/globals.css'
import NextImage from 'next/legacy/image'
import './styles.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={`relative flex h-full min-h-screen w-full flex-col items-center justify-center bg-[#FDD41E]`}>
				<NextImage
					src='/bart.png'
					alt='bart'
					layout='fill'
					className='object-contain object-bottom object-right'
				/>
				<div className='z-10 h-full w-full max-w-6xl p-5 pt-0'>{children}</div>
			</body>
		</html>
	)
}
