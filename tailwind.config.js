/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
<<<<<<< HEAD
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
=======
      fontFamily : {
        'playfair' : ['Playfair Display', 'serif'],
      },

>>>>>>> origin/main
    },
  },
  plugins: [],
}