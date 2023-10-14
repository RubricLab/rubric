'use client'

// import {copyToClipboard} from '@rubriclab/utils'

export const ContactButton = ({
	body,
	className
}: {
	body: string
	className?: string
}) => {
	return (
		<button
			className={`${className} center w-full rounded-full border bg-orange-600 px-6 py-4 text-2xl font-light text-white transition-colors hover:bg-orange-500 sm:w-fit`}
			onClick={() => {
				// copyToClipboard(body, {
				// 	onError: err => {
				// 		toast.error(err?.message || 'Failed to copy. Please try manually.')
				// 	},
				// 	onSuccess: () => {
				// 		toast.success('Copied to clipboard!')
				// 	}
				// })
			}}>
			{body}
		</button>
	)
}
