module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:react/jsx-runtime',
		'plugin:testing-library/react',
	],
	overrides: [
		{
			files: ['*.ts', '*jsx', '*js'],
			env: {
				node: true,
			},
			parserOptions: {
				sourceType: 'module',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		requireConfigFile: false,
		allowImportExportEverywhere: true,
		ecmaFeatures: {
			globalReturn: false,
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': ['off'],
		'no-shadow': 'off',
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
	},
};
