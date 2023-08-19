import {ImageResponse} from 'next/server'
import colors from 'tailwindcss/colors'
import {FONTS} from '../constants/fonts'
import config from '../tailwind.config'

export const runtime = 'edge'

export const contentType = 'image/png'
export const size = {
	width: 32,
	height: 32
}

export default async function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 28,
					background: config.theme.extend.colors['simpson-yellow'],
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: colors['blue']['700'],
					paddingBottom: '5px'
				}}>
				B
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: 'simpson',
					data: await (await fetch(FONTS.simpsonFontUrl)).arrayBuffer()
				}
			]
		}
	)
}
