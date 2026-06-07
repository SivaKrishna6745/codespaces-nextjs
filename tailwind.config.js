/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./global.css", // Points directly to your root global.css
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}