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
    backgroundImage: {
      'hero-pattern': "url('/src/img/Banding.png')",
    },
    height: {
      'half-screen': '50vh',
    }
},
},
  plugins: [],
}
