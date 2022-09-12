/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
        secondary: "Dosis, sans-serif",
        tertiary: "Overpass, sans-serif",
      },
      lineHeight: {
        squish: "0.8"
      }
    },
  },
  plugins: [],
};
