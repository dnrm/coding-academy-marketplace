/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Manrope, sans-serif",
        secondary: "Space Grotesk, sans-serif",
        tertiary: "Inter, sans-serif",
      },
      lineHeight: {
        squish: "0.8"
      }
    },
  },
  plugins: [],
};
