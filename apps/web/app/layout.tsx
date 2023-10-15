import {ToastProvider} from '@rubriclab/ui'
import PlausibleProvider from 'next-plausible'
import {Plus_Jakarta_Sans} from 'next/font/google'
import localFont from 'next/font/local'
import {META} from '../lib/constants'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './styles.css'

const jakartaSans = Plus_Jakarta_Sans({subsets: ['latin']})

const neueBit = localFont({
	src: '../public/fonts/PPNeueBit-Bold.otf',
	variable: '--font-neue-bit'
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
			<head>
				<PlausibleProvider domain='rubriclab.com' />
			</head>
			<body
				className={`${jakartaSans.className} ${neueBit.variable} relative flex h-full min-h-screen w-full flex-col items-center`}>
				<NavBar />
				{/* <BackgroundGrid className='fixed z-0 h-full w-full' /> */}
				<ToastProvider />
				<div className='z-10 w-full 2xl:max-w-6xl'>{children}</div>
				<Footer />
			</body>
		</html>
	)
}
