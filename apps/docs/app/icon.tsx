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
					background: colors['orange']['700'],
					color: config.theme.colors['off-white'],
					display: 'flex',
					fontSize: 10,
					height: '100%',
					justifyContent: 'center',
					paddingBottom: '1px',
					width: '100%'
				}}>
				Docs
			</div>
		),
		{
			...size,
			fonts: [
				{
					data: await (await fetch(FONTS.calSansURL)).arrayBuffer(),
					name: 'cal-sans'
				}
			]
		}
	)
}
