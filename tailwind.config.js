const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      colors: {
        'space-indigo': '#1d1135',
        'space-blue': '#0c164f',
        'terminal-gray': '#32385A',
        'terminal-special': '#B8CBFA',
      },
      animation: {
        'float': 'floating 4s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
