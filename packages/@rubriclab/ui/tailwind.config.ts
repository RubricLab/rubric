import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['lib/*.tsx'],
	presets: [config]
} satisfies Config

export default tailwindConfig
