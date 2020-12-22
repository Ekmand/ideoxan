module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.html'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Gilroy','ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe\\ UI"', 'Roboto', '"Helvetica\\ Neue"', 'Arial', '"Noto\\ Sans"', 'sans-serif', '"Apple\\ Color\\ Emoji"', '"Segoe\\ UI\\ Emoji"', '"Segoe\\ UI\\ Symbol"', '"Noto\\ Color\\ Emoji"']
    },
    extend: {
      colors: {
        gray: {
          '950': '#070b14'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
