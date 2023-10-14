import Link from 'next/link'
import ContactButton from './ContactButton'
import Logo from './Logo'

export default function NavBar() {
	return (
		<nav className='absolute left-[50%] top-0 z-20 flex w-full -translate-x-1/2 items-center justify-between gap-1 p-5 sm:px-10'>
			<Link
				href='/'
				className='text-inherit'>
				<Logo />
			</Link>
			<ContactButton variant='light' />
		</nav>
	)
}
