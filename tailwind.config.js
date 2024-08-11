/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './*.{html,js}',
  './games/**/*'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#0591A0',
        tertiary: '#FFC801',
      },
    },
  },
  plugins: [],
}

