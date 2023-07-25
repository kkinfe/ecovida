module.exports = {
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
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		requireConfigFile: false,
		allowImportExportEverywhere: true,
		ecmaFeatures: {
			globalReturn: false,
		},
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': ['off'],
		'no-shadow': 'off',
		indent: ['warn', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
