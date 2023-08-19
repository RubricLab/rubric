import ToastProvider from '@rubriclab/ui/ToastProvider'
import '@rubriclab/ui/globals.css'
import BackgroundGrid from '../components/BackgroundGrid'
import {META} from '../constants/metadata'
import './styles.css'

/* 

WEIRD BUG. In order to load this font, you need to delete the font in public/fonts/CalSans-SemiBold.ttf 
and re-download and replace it. Then you can uncomment this code and line 43 in this file.

For some reason, when the cli clones the calsans font, it doesn't clone the font correctly.

You can download it here: https://rubriclab.com/fonts/CalSans-SemiBold.ttf

*/

// const calSans = localFont({
//   src: "../public/fonts/CalSans-SemiBold.ttf",
//   variable: "--font-cal-sans",
// });

export const metadata = {
	metadataBase: new URL(META.siteURL),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US'
		}
	}
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body
				className={
					// `${calSans.variable} ` +
					`relative flex h-full min-h-screen w-full flex-col items-center`
				}>
				<BackgroundGrid className='fixed h-full w-full' />
				<ToastProvider />
				<div className='z-10 w-full max-w-6xl p-5 pt-0'>{children}</div>
			</body>
		</html>
	)
}
