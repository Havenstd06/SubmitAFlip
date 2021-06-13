const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'Inter', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        maldive : {
          DEFAULT: '#407FF0',
          light: '#6696ed',
          dark: '#1866f2'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
