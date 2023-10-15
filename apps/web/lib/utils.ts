import {toast} from '@rubriclab/ui'
import axios, {AxiosPromise, Method} from 'axios'
import clsx, {type ClassValue} from 'clsx'
import {Metadata} from 'next'
import qs from 'qs'
import {twMerge} from 'tailwind-merge'
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
export const getMetadata = ({
	title,
	description,
	previewImageUrl
}: {
	title?: string
	description?: string
	previewImageUrl?: string
}): Metadata => {
	const combinedTitle = `${title ? `${title} | ` : ''}${META.title}`
	return {
		description: description || DEFAULT_META.description,
		openGraph: {
			...DEFAULT_META.openGraph,
			description: description || DEFAULT_META.description,
			title: combinedTitle,
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
		title: combinedTitle,
		twitter: {
			...DEFAULT_META.twitter,
			title: combinedTitle
		},
		...DEFAULT_META
	}
}

// Allows merging of Tailwind class
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// Copy to clipboard
export function copyToClipboard(input: string) {
	navigator.clipboard.writeText(input)
	toast.success('Email copied')
}

// Send slack message
export async function sendSlackMessage(
	name: string,
	email: string,
	message: string
) {
	const url = 'https://slack.com/api/chat.postMessage'

	const payload = {
		token: process.env.SLACK_KEY,
		channel: 'C05AQKAJL9X', // #sales channel ID
		text: `${name}\n${email}\n${message}\n`
	}

	await apiRequest(url, 'POST', qs.stringify(payload)).catch((error: Error) => {
		console.error(error)
	})
}

/**
 * Send an API request with headers that accepts JSON response
 */
export function apiRequest(
	url: string,
	method: Method,
	data = {},
	headers = {}
): AxiosPromise {
	// Ensure internet is connected
	if (!(window && window.navigator && window.navigator.onLine))
		return Promise.reject('Disconnected from internet')

	// Accept JSON responses and do not cache response
	const defaultHeaders = {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}

	// Combine headers
	const combinedHeaders = {...defaultHeaders, ...headers}

	// Clear then set headers in Axios
	axios.defaults.headers.common = {}
	Object.keys(combinedHeaders).map(header => {
		axios.defaults.headers.common[header] = combinedHeaders[header]
	})

	return axios({method, url, data})
}
