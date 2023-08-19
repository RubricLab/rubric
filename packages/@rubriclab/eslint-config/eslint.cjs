module.exports = {
	plugins: ['sort-keys-fix'],
	extends: ['next', 'turbo', 'prettier'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		curly: ['error', 'multi'],
		'sort-vars': ['error'],
		'sort-keys': ['error'],
		'sort-keys-fix/sort-keys-fix': ['error']
	},
	parserOptions: {
		babelOptions: {
			presets: ['next/babel']
		}
	}
}
