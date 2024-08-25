import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				primary: '#ffffff',
				secondary: '#ececec',
				danger: '#f7c4c7',
				success: '#86efac',
				textPrimary: '#222222',
				textSecondary: '#777777',
			},
			gridTemplateColumns: {
				'auto-fill-min': 'repeat(auto-fill, minmax(60px, min-content))',
				'auto-fit-min': 'repeat(auto-fit, minmax(60px, min-content))',
			},
		},
	},
	plugins: [],
};
export default config;
