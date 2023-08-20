import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['./app/**/*.tsx'],
	presets: [config],
	theme: {
		extend: {
			colors: {
				...config.theme.colors,
				'off-white': '#E2DCDB'
			},
			fontFamily: {
				'cal-sans': ['var(--font-cal-sans)']
			}
		}
	}
} satisfies Config

export default tailwindConfig
