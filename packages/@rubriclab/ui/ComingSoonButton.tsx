'use client'

import {toast} from './ToastProvider'

export const ComingSoonButton = () => {
	return (
		<button
			className='rounded-full bg-orange-600 p-4 px-6 font-light text-white'
			onClick={() => toast.success('Coming soon')}>
			Coming soon.
		</button>
	)
}
