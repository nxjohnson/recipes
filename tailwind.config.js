/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      error: '#ED6A5A',
      neutral: colors.neutral,
      gray: colors.gray,
    },
    fontFamily: {
      'heading': ['Antonio', 'sans-serif'],
      'subHeading': ['brigade', 'sans-serif'],
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      aspectRatio: {
        'square': ' 1 / 1',
        '2/3': '3 / 2'
      },
      width: {
        '136': '34rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
