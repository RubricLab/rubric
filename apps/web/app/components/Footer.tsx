import ContactButton from './ContactButton'

const Footer = () => {
	return (
		<div className='flex h-[400px] w-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-[#1C1F23] to-[#14171A] p-5 text-white sm:p-10'>
			<div className='flex flex-col gap-1 text-center'>
				<p className='font-2xl'>Got an idea? Get in touch.</p>
				<p className='font-2xl'> Let&apos;s make something amazing, together.</p>
			</div>
			<ContactButton variant='dark' />
		</div>
	)
}

export default Footer
