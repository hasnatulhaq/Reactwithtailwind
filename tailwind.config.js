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
        
        'tablet': '845px',
        'mobile' : '500px',
        'small': {'min': '640px', 'max': '767px'},
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
        
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
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
      'zlightgray': "#e3e2e2",
      'lightgray' : '#D3D3D3',
      'zblue' : '#4257a7',
      'zgray' : '#5A5A5A',
      'zlblue' : "#435ec8f2",
      'zbrown' : "rgb(58 57 57/var(--tw-bg-opacity))",
      'zstrip' : "rgb(230 230 231/var(--tw-border-opacity))"
    },
  },
  plugins: [],
}
