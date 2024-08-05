/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'shark-gradient': 'linear-gradient(135deg, #e0f7fa, #b2ebf2, #80deea, #4dd0e1)',
			  },
			  colors: {
				'light-blue': '#e0f7fa',
				'circle-blue': 'rgba(0, 174, 239, 0.3)',
			  },
		},
	},
	plugins: [],
}
