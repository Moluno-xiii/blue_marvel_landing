/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03B0FF",
        secondary: "#004462",
        tertiary: "#Bd4257",
        darkBlue: "#057caf",
      },
      fontFamily: {
        sans: ["Inter, Sans-serif"],
      },
    },
  },
  plugins: [],
};
