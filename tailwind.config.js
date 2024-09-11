/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      'black': '#1b1b1b',
      'dark-black': '#101010',
      'gray': '#1f1f1f',
      'gray-light': '#737373',
      'green': '#193028',
      'dark-green': '#0e1b16',
      'bright-green': '#088d5f',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

