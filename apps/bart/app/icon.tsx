import {ImageResponse} from 'next/server'
import colors from 'tailwindcss/colors'
import {FONTS} from '../constants/fonts'
import config from '../tailwind.config'

export const runtime = 'edge'

export const contentType = 'image/png'
export const size = {
	height: 32,
	width: 32
}

export default async function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					alignItems: 'center',
					background: config.theme.colors['simpson-yellow'],
					color: colors['black'],
					display: 'flex',
					fontSize: 28,
					height: '100%',
					justifyContent: 'center',
					paddingTop: '1px',
					width: '100%'
				}}>
				B
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
