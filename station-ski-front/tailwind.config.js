/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
    "./src/**/**/*.{html,ts,css}",
    "./src/*.{html,ts,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: "#app",
};
