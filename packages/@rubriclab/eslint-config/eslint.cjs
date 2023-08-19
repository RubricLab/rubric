module.exports = {
	extends: ['next', 'turbo', 'prettier', 'plugin:jsonc/base'],
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
		],
		'react/jsx-sort-props': ['error'],
		'sort-keys': ['error'],
		'sort-keys-fix/sort-keys-fix': ['error'],
		'sort-vars': ['error']
	}
}
