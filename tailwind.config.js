/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        // adelia: ["ADELIA", "cursive"],
        montserrat: ['Montserrat', "sans-serif"],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        'zsm': '12px'
      },
      screens: {
        'sm': {'min': '640px', 'max': '767px'},
        'tablet': '845px',
        'mobile' : '500px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray' : '#8c8c8c',
      'lightgray' : '#D3D3D3',
      'zblue' : '#4257a7',
      'zgray' : '#5A5A5A',
      'zlblue' : "#435ec8f2"
    },
  },
  plugins: [],
}
