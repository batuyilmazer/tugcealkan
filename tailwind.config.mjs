/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  aspectRatio: {
			'4/3': '4 / 3',
			'3/4': '3 / 4',
			'16/9': '16 / 9',
			'9/16': '9 / 16',
			'3/2': '3 / 2',
			'2/3': '2 / 3',
			'5/4': '5 / 4',
			'4/5': '4 / 5',
		  },
		},
	  },
	plugins: [],
}
