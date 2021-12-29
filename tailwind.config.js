const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#FEEFE7',
        surface: '#0F0E14',
        container: '#2C2B31',
        primary: '#18BAFF',
        'primary-variant': '#14C8E8',
        accent: '#C8C8DF',
        secondary: '#0BE8C5',
        'secondary-variant': '#49FFC5',
        'white-text': '#FEEFE7',
        'black-text': '#0F0E14',
      },
    },
    fontFamily: {
      sans: ['"Barlow"', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
