import {ImageResponse} from 'next/server'
import colors from 'tailwindcss/colors'
import BackgroundGrid from '../components/BackgroundGrid'
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
	return new ImageResponse(
		(
			<div
				style={{
					background: config.theme.extend.colors['off-white'],
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					overflowY: 'hidden'
				}}>
				<BackgroundGrid
					style={{
						position: 'absolute',
						width: size.width
					}}
				/>
				<div style={{fontSize: 128}}>Rubric</div>
				<div style={{fontSize: 48, color: colors['orange']['700']}}>We build software.</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: 'cal-sans',
					data: await (await fetch(FONTS.calSansURL)).arrayBuffer()
				}
			]
		}
	)
}
