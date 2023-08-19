import {ImageResponse} from 'next/server'
import colors from 'tailwindcss/colors'
import {FONTS} from '../constants/fonts'
import config from '../tailwind.config'

export const runtime = 'edge'

export const alt = 'Rubric logo with subtitle: We build software.'
export const contentType = 'image/png'
export const size = {
	width: 1200,
	height: 630
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
					background: config.theme.extend.colors['simpsons-yellow'],
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					overflowY: 'hidden'
				}}>
				<div style={{fontSize: 128}}>Bart</div>
				<div style={{fontSize: 48, color: colors['orange']['700']}}>40.7005635,-73.9722209</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: 'cal-sans',
					data: await (await fetch(FONTS.simpsonFontUrl)).arrayBuffer()
				}
			]
		}
	)
}
