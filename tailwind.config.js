/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        superdark:{
          400: '#110F12',
        },
    },
  },
},
  plugins: [],
}
