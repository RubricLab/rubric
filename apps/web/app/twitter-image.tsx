import {ImageResponse} from 'next/server'
import colors from 'tailwindcss/colors'
import {FONTS} from '../lib/constants'
import config from '../tailwind.config'
import BackgroundGrid from './components/BackgroundGrid'

export const runtime = 'edge'

export const alt = 'Rubric logo with subtitle: We build software.'
export const contentType = 'image/png'
export const size = {
	height: 630,
	width: 1200
}

const backgroundColor = config.theme.colors['off-white']

type Props = {
	params: object
}

export default async function Image({params}: Props) {
	console.log('Path params: ', params)

	return new ImageResponse(
		(
			<div
				style={{
					alignItems: 'center',
					background: backgroundColor,
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					justifyContent: 'center',
					overflowY: 'hidden',
					position: 'relative',
					width: '100%'
				}}>
				<BackgroundGrid
					style={{
						position: 'absolute',
						width: size.width
					}}
				/>
				<div style={{fontSize: 128}}>Rubric</div>
				<div style={{color: colors['orange']['700'], fontSize: 48}}>
					We build software.
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					data: await (await fetch(FONTS.neueBit)).arrayBuffer(),
					name: 'neue-bit'
				}
			]
		}
	)
}
