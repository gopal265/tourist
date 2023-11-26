/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
        customShadow : "7px 7px black",
        customShadow2 : "4px 4px #faf7e3 ",
        customShadow3 : "2px 2px black",

      },
      colors:{
        appColor : "#faf7e3"
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          "0%" : { transform: 'translateX(0)' },
          "100%" : { transform: 'translateX(-100%)' },
        }
      },
      screens:{
         "custom" : "966px"
      }
    },
  },
  plugins: [],
}

