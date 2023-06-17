/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      // center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1400px',
      },
    },
    extend: {
     
        colors: {
          primary: "#ef4935",
          'primary-light': "#d14c3c",
          
        }
      }
    
  },
  plugins: [],
}
// #ef4935