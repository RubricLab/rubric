import {ImageResponse} from 'next/server'
import colors from 'tailwindcss/colors'
import {FONTS} from '../lib/constants'

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
					background: colors['white'],
					color: colors['black'],
					display: 'flex',
					fontSize: 28,
					height: '100%',
					justifyContent: 'center',
					paddingBottom: '5px',
					width: '100%'
				}}>
				R
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
