const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        1: '#1a2323',
        2: '#2f3737'
      },
      primary: '#112121',
      accent: '#b39c4d',
      secondary: '#294936',
    },
    extend: {},
  },
  plugins: [],
}
