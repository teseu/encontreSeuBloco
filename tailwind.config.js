/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,vue}'],
	// darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
