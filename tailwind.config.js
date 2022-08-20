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
        salmon:{
          400: '#f87c6c',
        },
        darkBlue:{
          400: '#081434'
        },
        specialPurple:{
          400: '#681cc4'
        },
        specialIndigo:{
          400: '#b01cec'
        }
    },
    backgroundImage: {
      'hero-pattern': "url('/src/img/Banding.png')",
    },
    height: {
      'half-screen': '60vh',
      'giant': '80vh',
    },
    maxHeight: {
      '128': '32rem',
    }
},
},
  plugins: [],
}
