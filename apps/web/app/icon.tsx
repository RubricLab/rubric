import {ImageResponse} from 'next/server'

export const runtime = 'edge'

export const contentType = 'image/png'
export const size = {
	height: 32,
	width: 32
}

export default async function Icon() {
	return new ImageResponse(
		(
			<svg
				width='90'
				height='90'
				viewBox='0 0 9 9'
				xmlns='http://www.w3.org/2000/svg'>
				<rect
					width='9'
					height='9'
					fill='black'
				/>
				<rect
					x='3'
					y='5'
					width='1'
					height='1'
					fill='white'
				/>
				<rect
					x='3'
					y='4'
					width='1'
					height='1'
					fill='white'
				/>
				<rect
					x='3'
					y='3'
					width='1'
					height='1'
					fill='white'
				/>
				<rect
					x='4'
					y='4'
					width='1'
					height='1'
					fill='white'
				/>
				<rect
					x='5'
					y='3'
					width='1'
					height='1'
					fill='white'
				/>
			</svg>
		)
	)
}
