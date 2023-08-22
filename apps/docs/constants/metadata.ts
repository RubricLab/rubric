import {Metadata} from 'next'

export const META = {
	desc: 'Official Documentation for Rubric Labs Software',
	siteURL: 'https://docs.rubriclab.com',
	title: 'Rubric Docs',
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
