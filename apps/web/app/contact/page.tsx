'use client'
import {toast} from '@rubriclab/ui'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {copyToClipboard} from '../../lib/utils'
import Button from '../components/Button'

export default function Contact() {
	const router = useRouter()
	const [sending, setSending] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async () => {
		try {
			setSending(true)
			if (name.length > 0 && email.length > 0 && message.length > 0) {
				let url = window.location.origin
				const response = await fetch(`${url}/api/slack`, {
					body: JSON.stringify({name: name, email: email, body: message}),
					method: 'POST'
				})
				if (response.ok) {
					toast.success('We will be in touch')
					setTimeout(() => router.push('/'), 3 * 1000)
				}
			} else toast.error('Missing name, email, or message')
		} catch (error) {
		} finally {
			setSending(false)
		}
	}

	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-8 p-5 sm:px-10'>
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
			</div>
			<div className='flex flex-col gap-3'>
				<Button
					disabled={sending}
					body='Submit'
					variant='dark'
					onClick={handleSubmit}
				/>
				<p className='text-sm'>
					Please email us at{' '}
					<button
						className='font-semibold underline-offset-4 hover:underline'
						onClick={() => copyToClipboard('hello@rubriclab.com')}>
						hello@rubriclab.com
					</button>
				</p>
			</div>
		</div>
	)
}
