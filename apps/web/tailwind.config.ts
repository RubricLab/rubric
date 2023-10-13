import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['./app/**/*.tsx', './components/**/*.tsx'],
	presets: [config],
	theme: {
		colors: {
			...config.theme.colors,
			'off-white': '#E2DCDB'
		},
		extend: {
			fontFamily: {
				'neue-bit': ['var(--font-neue-bit)']
			}
		}
	}
} satisfies Config

export default tailwindConfig
