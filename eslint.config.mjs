import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['node_modules/', 'test-results/', 'playwright-report/'],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				project: true,
				tsconfigRootDir: '.',
			},
		},
		rules: {
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
);
