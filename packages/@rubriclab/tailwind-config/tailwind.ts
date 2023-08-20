import colors from 'tailwindcss/colors'

const tailwindConfig = {
	content: [],
	plugins: [],
	theme: {
		extend: {
			colors: {
				...colors,
				'off-white': '#E2DCDB',
				transparent: 'transparent'
			}
		}
	}
}

export default tailwindConfig
