const config = require('@rubriclab/tailwind-config')

module.exports = {
	presets: [config],
	content: ['./app/**/*.{js,ts,tsx}'],
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
