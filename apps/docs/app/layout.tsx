import {ToastProvider} from '@rubriclab/ui'
import './styles.css'

import localFont from 'next/font/local'
import {META} from '../constants/metadata'

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
			<body className={`${calSans.variable} flex min-h-screen w-full flex-col items-center`}>
				<ToastProvider />
				<div className='z-10 h-full max-w-6xl p-5 pt-0'>{children}</div>
			</body>
		</html>
	)
}
