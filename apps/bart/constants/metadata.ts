import {Metadata} from 'next'

export const META = {
	title: 'Bart',
	desc: 'Come hang out',
	twitter: '@rubriclabs',
	siteURL: 'https://bartbartbart.com'
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
