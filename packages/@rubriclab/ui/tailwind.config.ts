import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['./*.tsx'],
	presets: [config],
	theme: {
		extend: {
			colors: {
				...config.theme.extend.colors
			}
		}
	}
} satisfies Config

export default tailwindConfig
