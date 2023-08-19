/**
 * Copy text to the clipboard.
 * Throws an error if clipboard is unavailable.
 */
export const copyToClipboard = (
	text: string,
	{
		onSuccess,
		onError
	}: {
		onSuccess?: (res?: string | void) => void
		onError?: (error?: Error) => void
	} = {}
) => {
	if (!window?.navigator) throw new Error('Please try copying the text manually. Something went wrong.')

	navigator?.clipboard
		?.writeText(text)
		.then(res => {
			onSuccess?.(res)
		})
		.catch(err => {
			onError?.(err)
		})
}
