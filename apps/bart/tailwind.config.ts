import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['./app/*.tsx'],
	presets: [config],
	theme: {
		colors: {
			...config.theme.colors,
			'simpson-yellow': '#FDD41E'
		},
		extend: {
			fontFamily: {
				simpson: ['var(--font-simpson)']
			}
		}
	}
} satisfies Config

export default tailwindConfig
