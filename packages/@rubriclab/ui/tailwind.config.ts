import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['./src/*.tsx'],
	presets: [config]
} satisfies Config

export default tailwindConfig
