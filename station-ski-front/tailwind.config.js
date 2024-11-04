/** @type {import('tailwindcss').Config} */
module.exports = {
  optimizeCss: false,
  enableBabelRuntime: true,
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
