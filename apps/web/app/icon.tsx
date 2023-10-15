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
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g clip-path='url(#clip0_331_2)'>
						<rect
							width='32'
							height='32'
							fill='black'
						/>
						<rect
							x='4'
							y='20.0002'
							width='8'
							height='8'
							fill='white'
						/>
						<rect
							x='4'
							y='11.9998'
							width='8'
							height='8'
							fill='white'
						/>
						<rect
							x='4'
							y='4'
							width='8'
							height='8'
							fill='white'
						/>
						<rect
							x='12.0001'
							y='11.9998'
							width='8'
							height='8'
							fill='white'
						/>
						<rect
							x='19.9999'
							y='4'
							width='8'
							height='8'
							fill='white'
						/>
					</g>
					<defs>
						<clipPath id='clip0_331_2'>
							<rect
								width='32'
								height='32'
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
