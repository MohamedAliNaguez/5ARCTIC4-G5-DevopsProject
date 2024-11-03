/** @type {import('tailwindcss').Config} */
module.exports = {
  optimizeCss: false, 
  enableBabelRuntime: true,
  purge: ['./src/**/*.{js,ts,jsx,tsx}'], 
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
