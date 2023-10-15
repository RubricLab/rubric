'use client'

import {toast} from '@rubriclab/ui'
import {useState} from 'react'
import {copyToClipboard, sendSlackMessage} from '../../lib/utils'
import Button from '../components/Button'

export default function Contact() {
	const [sending, setSending] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	async function handleSubmit() {
		if (name && email && message)
			try {
				setSending(true)
				await sendSlackMessage(name, email, message)
			} catch (error) {
			} finally {
				setSending(false)
			}
		else toast.error('Missing field')
	}

	return (
		<div className='flex min-h-screen flex-col items-center justify-center p-5 sm:px-10'>
			<h1>Get in touch</h1>
			<div className='flex w-full max-w-sm flex-col gap-5'>
				<input
					placeholder='Name'
					onChange={e => setName(e.target.value)}
				/>
				<input
					placeholder='Email'
					onChange={e => setEmail(e.target.value)}
				/>
				<textarea
					placeholder='Message'
					onChange={e => setMessage(e.target.value)}
				/>
				<Button
					body='Submit'
					variant='dark'
					onClick={() => handleSubmit()}
				/>
				<span className='text-sm'>
					Alternatively, feel free to email us at{' '}
					<button
						className='font-semibold underline-offset-4 hover:underline'
						onClick={() => copyToClipboard('hello@rubriclab.com')}>
						hello@rubriclab.com
					</button>
				</span>
			</div>
		</div>
	)
}
