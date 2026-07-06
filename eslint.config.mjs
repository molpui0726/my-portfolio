import nextVitals from 'eslint-config-next/core-web-vitals';
import storybook from 'eslint-plugin-storybook';

const eslintConfig = [
	{
		ignores: ['.next/**', 'node_modules/**', 'storybook-static/**', 'out/**'],
	},
	...nextVitals,
	...storybook.configs['flat/recommended'],
];

export default eslintConfig;
