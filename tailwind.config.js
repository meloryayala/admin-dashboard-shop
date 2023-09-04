/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "cupcake",
      "acid",
      "lemonade",
      "retro",
    ]
  },
}

