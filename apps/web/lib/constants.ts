import {Metadata} from 'next'

export const META = {
	desc: 'We are a lean team of developers & designers that build software end-to-end.',
	githubURL: 'https://github.com/rubriclab',
	siteURL: 'https://rubriclab.com',
	title: 'Rubric',
	twitter: '@rubriclabs'
}

export const DEFAULT_META: Metadata = {
	description: META.desc,
	openGraph: {
		title: META.title,
		description: META.desc,
		siteName: META.title,
		type: 'website',
		url: META.siteURL
	},
	title: META.title,
	twitter: {
		card: 'summary_large_image',
		creator: META.twitter,
		description: META.desc,
		title: META.title
	},
	themeColor: '#E1DCDB',
	viewport: {width: 'device-width', initialScale: 1}
}

export const MISC = {
	FONTS: {
		calSansURL: 'https://rubriclab.com/fonts/CalSans-SemiBold.ttf'
	}
}
