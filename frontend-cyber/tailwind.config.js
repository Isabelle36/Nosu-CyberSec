/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald'],
        'body': ['Open Sans'],
      },
      colors:{
        neonGreen : '#39FF14',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

