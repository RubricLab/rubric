/** @type {import("prettier").Config} */
module.exports = {
	plugins: [require.resolve('prettier-plugin-organize-imports'), require.resolve('prettier-plugin-tailwindcss')],
	arrowParens: 'avoid',
	bracketSpacing: false,
	bracketSameLine: true,
	proseWrap: 'never',
	printWidth: 1000,
	semi: false,
	singleQuote: true,
	singleAttributePerLine: true,
	jsxSingleQuote: true,
	tabWidth: 1,
	trailingComma: 'none',
	useTabs: true
}
