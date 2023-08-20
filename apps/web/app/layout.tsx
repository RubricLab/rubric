import '@rubriclab/ui/globals.css'
import {ToastProvider} from '@rubriclab/ui/src'
import localFont from 'next/font/local'
import {META} from '../lib/constants'
import BackgroundGrid from './components/BackgroundGrid'
import NavBar from './components/NavBar'

import './styles.css'

const calSans = localFont({
	src: '../public/fonts/CalSans-SemiBold.ttf',
	variable: '--font-cal-sans'
})

export const metadata = {
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US'
		}
	},
	metadataBase: new URL(META.siteURL)
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={`${calSans.variable} relative flex h-full min-h-screen w-full flex-col items-center`}>
				<BackgroundGrid className='fixed h-full w-full' />
				<NavBar />
				<ToastProvider />
				<div className='z-10 w-full max-w-6xl p-5 pt-0'>{children}</div>
			</body>
		</html>
	)
}
