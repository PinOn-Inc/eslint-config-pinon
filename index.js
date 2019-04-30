module.exports = {
	parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    'prettier'
  ],
	parserOptions: {
		ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
		sourceType: 'module',  // Allows for the use of imports
		ecmaFeatures: {
			jsx: true,  // Allows for the parsing of JSX
		},
		project: __dirname + '/../../../tsconfig.json'
	},
	settings: {
		react: {
			version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	rules: {
    "prettier/prettier": ["error", {
      semi: true,
      trailingComma: 'all',
      singleQuote: true,
      jsxSingleQuote: true,
      printWidth: 120,
      tabWidth: 2,
      bracketSpacing: true,
      jsxBracketSameLine: false,
      arrowParens: 'always',
      endOfLine: 'lf',
    }],
		'no-bitwise': 'off',
		'newline-before-return': 'off',
		'no-trailing-spaces': 'off',
		'max-classes-per-file': 'off',
		'curly': 'off',
		'prefer-arrow-callback': 'error',
		'no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
		'no-console': 'warn',
		'radix': ['error', 'as-needed'],
		'no-return-await': 'error',
		'default-case': 'error',
		'use-isnan': 'error',
		'prefer-template': "error",
    'no-useless-concat': "error",
    "camelcase": "warn",
		
		'react/jsx-curly-spacing': 'off',
		'react/jsx-equals-spacing': 'off',
		'react/self-closing-comp': 'off',
    "react/prop-types": "off",
		"react/no-unescaped-entities": "off",
		'react/jsx-key': ['error'],
		'react/jsx-no-bind': ['warn', { 'allowArrowFunctions': true }],
		'react/no-access-state-in-setstate': ['warn'],
    'react/no-array-index-key': 'warn',
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/await-thenable': ['error', 'Bluebird'],
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/prefer-interface': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'earn',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/member-ordering': [
          'off',
          {
            'order': [
              'static-field',
              'instance-field',
              'constructor',
              'private-instance-method',
              'static-method',
              'public-instance-method',
            ],
          },
        ],
      },
    },
  ],
}