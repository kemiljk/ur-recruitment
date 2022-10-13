/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Modern Era", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#00c2b5",
      },
    },
  },
  plugins: [],
};
