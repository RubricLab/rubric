import {Metadata} from 'next'

export const META = {
	desc: 'We are a lean team of developers & designers that build software end-to-end.',
	siteURL: 'https://rubriclab.com',
	githubURL: 'https://github.com/rubriclab',	
	title: 'Rubric',
	twitter: '@rubriclabs'
}

export const DEFAULT_META: Metadata = {
	description: META.desc,
	openGraph: {
		description: META.desc,
		title: META.title
	},
	title: META.title,
	twitter: {
		card: 'summary_large_image',
		creator: META.twitter,
		description: META.desc,
		title: META.title
	}
}

export const MISC = {
	FONTS: {
		calSansURL: 'https://rubriclab.com/fonts/CalSans-SemiBold.ttf'
	}
}
