/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html", ],
  theme: {
    extend: {  colors: {
      navy: "#0d1b2a",
      bluegray: "#1b263b",
      steel: "#415a77",
      softblue: "#778da9",
      offwhite: "#e0e1dd",
    },},
  },
  plugins: [],
}

