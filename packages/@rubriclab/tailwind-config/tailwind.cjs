const colors = require('tailwindcss/colors')
// To prevent Tailwind warning: https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-1046087220
delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

module.exports = {
	plugins: [],
	theme: {
		extend: {
			colors: {
				...colors,
				'off-white': '#E2DCDB',
				transparent: 'transparent'
			}
		}
	}
}
