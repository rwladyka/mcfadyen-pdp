const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#FFF',
      darkGrey: '#767676',
      grey: '#A6A6A6',
      lightGrey: '#E5E5E5',
      offWhite: '#F5F5F5',
      red: '#CA4747',
    },
    fontFamily: {
      sans: 'Roboto',
    },
    extend: {},
  },
  plugins: [],
};
