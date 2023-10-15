import {ImageResponse} from 'next/server'

export const runtime = 'edge'

export const contentType = 'image/png'
export const size = {
	height: 90,
	width: 90
}

export default async function Icon() {
	return new ImageResponse(
		(
			<svg
				width='90'
				height='90'
				viewBox='0 0 90 90'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<rect
					width='90'
					height='90'
					fill='white'
				/>
				<rect
					x='45'
					y='45'
					width='10'
					height='10'
					fill='white'
				/>
				<rect
					x='30'
					y='50'
					width='10'
					height='10'
					fill='black'
				/>
				<rect
					x='30'
					y='40'
					width='10'
					height='10'
					fill='black'
				/>
				<rect
					x='30'
					y='30'
					width='10'
					height='10'
					fill='black'
				/>
				<rect
					x='40'
					y='40'
					width='10'
					height='10'
					fill='black'
				/>
				<rect
					x='50'
					y='30'
					width='10'
					height='10'
					fill='black'
				/>
			</svg>
		)
	)
}
