/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#242424',
        secondary: '#464646',
        tertiary: '#D9D9D9',
        white: '#fafafa',
        green: '#16AC52',
        darkgreen: '#0F7739',
        red: '#D74646',
        darkred: '#A13434'
      }
    },
  },
  plugins: [],
}