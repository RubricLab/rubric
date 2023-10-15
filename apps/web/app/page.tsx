import {getMetadata} from '../lib/utils'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'

export const metadata = getMetadata({title: 'Home'})

export default async function Home() {
	return (
		<div className='flex flex-col'>
			<Hero />
			<Projects />
			<Services />
		</div>
	)
}
