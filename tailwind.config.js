/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors : {
        "primaryMacaulay": "#D65945",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      fontFamily : {
        'playfair' : ['Playfair Display', 'serif'],
      },

    },
  },
  plugins: [],
}