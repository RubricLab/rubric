/** @type {import("prettier").Config} */
module.exports = {
	arrowParens: 'avoid',
	bracketSameLine: true,
	bracketSpacing: false,
	jsxSingleQuote: true,
	plugins: [
		require.resolve('prettier-plugin-organize-imports'),
		require.resolve('prettier-plugin-tailwindcss')
	],
	proseWrap: 'never',
	semi: false,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 1,
	trailingComma: 'none',
	useTabs: true
}
