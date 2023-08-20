import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['./app/**/*.tsx'],
	presets: [config],
	theme: {
		extend: {
			colors: {
				...config.theme.extend.colors,
				'simpson-yellow': '#FDD41E'
			},
			fontFamily: {
				simpson: ['var(--font-simpson)']
			}
		}
	}
} satisfies Config

export default tailwindConfig
