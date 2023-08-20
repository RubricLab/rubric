import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['./app/**/*.tsx', './components/**/*.tsx'],
	presets: [config],
	theme: {
		extend: {
			colors: {
				...config.theme.extend.colors
			},
			fontFamily: {
				'cal-sans': ['var(--font-cal-sans)']
			}
		}
	}
} satisfies Config

export default tailwindConfig
