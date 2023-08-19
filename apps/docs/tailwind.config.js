const config = require('@rubriclab/tailwind-config')

module.exports = {
	content: ['./app/**/*.{js,ts,tsx}'],
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
}
