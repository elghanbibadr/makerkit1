/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "lightBlue":"#a78bfa",
        "lightGrey":"#6b7280e0"
      },
      boxShadow:{
        "grayBoxShadow":"0 1px 3px 0 #334155"
      }
    },
  },

}


