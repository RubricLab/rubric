module.exports = {
	extends: ['next', 'prettier', 'plugin:jsonc/base'],
	parserOptions: {
		babelOptions: {
			presets: ['next/babel']
		}
	},
	plugins: ['react', 'sort-keys-fix'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		curly: ['error', 'multi'],
		'jsonc/sort-array-values': [
			'error',
			{
				order: {type: 'asc'},
				pathPattern: '.*'
			}
		],
		'jsonc/sort-keys': [
			'error',
			{
				order: {type: 'asc'},
				pathPattern: '.*'
			}
		]
	}
}
