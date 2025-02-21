/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    
  ],
  theme: {
    extend: {},
  },
  plugins:  [require('daisyui')],
  daisyui,
}

