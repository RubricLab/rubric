import {Metadata} from 'next'

export const META = {
	title: 'My Cool Website',
	desc: 'Bootstrapped with create-rubric-app',
	twitter: '@rubriclabs',
	siteURL: 'https://rubriclab.com'
}

export const DEFAULT_META: Metadata = {
	title: META.title,
	description: META.desc,
	openGraph: {
		title: META.title,
		description: META.desc
	},
	twitter: {
		title: META.title,
		description: META.desc,
		card: 'summary_large_image',
		creator: META.twitter
	}
}
