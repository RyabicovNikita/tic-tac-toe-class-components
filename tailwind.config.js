/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./src/**/*.{html,jsx}', './src/index.html'],
	theme: {
		colors: {
			'disabled-color': '#cfcfcf',
			'error-color': '#d40000',
			'main-color': '#cbc5a0',
			black: colors.black,
			white: colors.white,
		},
		extend: {},
	},
	plugins: [],
};
