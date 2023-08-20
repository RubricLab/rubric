import {Config} from 'tailwindcss'
import _colors from 'tailwindcss/colors'

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>

type Colors = Optional<typeof _colors, 'lightBlue' | 'warmGray' | 'trueGray' | 'coolGray' | 'blueGray'>

const colors = _colors as Colors

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

const tailwindConfig = {
	content: [],
	plugins: [],
	theme: {
		colors: {
			...colors,
			transparent: 'transparent'
		}
	}
} satisfies Config

export default tailwindConfig
