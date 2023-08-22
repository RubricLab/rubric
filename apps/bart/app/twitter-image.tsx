import {ImageResponse} from 'next/server'
import colors from 'tailwindcss/colors'
import {FONTS} from '../constants/fonts'
import config from '../tailwind.config'

export const runtime = 'edge'

export const alt = 'Rubric logo with subtitle: We build software.'
export const contentType = 'image/png'
export const size = {
	height: 630,
	width: 1200
}

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
					background: config.theme.colors['simpsons-yellow'],
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					justifyContent: 'center',
					overflowY: 'hidden',
					position: 'relative',
					width: '100%'
				}}>
				<div style={{fontSize: 128}}>Bart</div>
				<div style={{color: colors['orange']['700'], fontSize: 48}}>40.7005635,-73.9722209</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					data: await (await fetch(FONTS.simpsonFontUrl)).arrayBuffer(),
					name: 'simpson'
				}
			]
		}
	)
}
