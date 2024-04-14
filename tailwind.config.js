/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"fond-one": "url('/src/assets/fondOne.png')",
				"fond-two": "url('/src/assets/fondTwo.png')",
				"fond-three": "url('/src/assets/fondThree.png')",
			},
		},
	},
	plugins: [require("daisyui")],
};
