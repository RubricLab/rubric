'use client'

import {toast} from './ToastProvider'
import './globals.css'

export const ComingSoonButton = () => {
	return (
		<button
			className='rounded-full bg-orange-600 p-4 px-6'
			onClick={() => toast.success('Coming soon')}>
			Coming soon.
		</button>
	)
}
