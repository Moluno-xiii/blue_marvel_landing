/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#004462",
        tertiary: "#Bd4257",
      },
      fontFamily: {
        sans: ["Roboto mono, Inter, Sans-serif"],
      },
    },
  },
  plugins: [],
};
