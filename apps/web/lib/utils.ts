import {Metadata} from 'next'
import {DEFAULT_META, META} from './constants'

// Parse string to Date object and return "Month DD, YYYY" format
export function parseDate(input: Date | string) {
	const date = new Date(input)
	const formattedDate = date.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	})
	return formattedDate
}

/**
 * Get metadata for a page. Optionally override title, description, and preview image URL.
 */
export const getMetadata = ({title, description, previewImageUrl}: {title?: string; description?: string; previewImageUrl?: string}): Metadata => {
	const combinedTitle = `${title ? `${title} | ` : ''}${META.title}`
	return {
		title: combinedTitle,
		description: description || DEFAULT_META.description,
		openGraph: {
			...DEFAULT_META.openGraph,
			title: combinedTitle,
			description: description || DEFAULT_META.description,
			...(previewImageUrl
				? {
						images: [
							{
								url: previewImageUrl
							}
						]
				  }
				: {})
		},
		twitter: {
			...DEFAULT_META.twitter,
			title: combinedTitle
		},
		...DEFAULT_META
	}
}
