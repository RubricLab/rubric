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
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<svg
					width='30'
					height='30'
					viewBox='0 0 30 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g clip-path='url(#clip0_331_2)'>
						<rect
							width='30'
							height='30'
							fill='white'
						/>
						<rect
							x='10'
							y='16.6667'
							width='3.33333'
							height='3.33333'
							fill='black'
						/>
						<rect
							x='10'
							y='13.3333'
							width='3.33333'
							height='3.33333'
							fill='black'
						/>
						<rect
							x='10'
							y='10'
							width='3.33333'
							height='3.33333'
							fill='black'
						/>
						<rect
							x='13.3334'
							y='13.3333'
							width='3.33333'
							height='3.33333'
							fill='black'
						/>
						<rect
							x='16.6666'
							y='10'
							width='3.33333'
							height='3.33333'
							fill='black'
						/>
					</g>
					<defs>
						<clipPath id='clip0_331_2'>
							<rect
								width='30'
								height='30'
								fill='white'
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
		),
		{...size}
	)
}
