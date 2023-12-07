/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px", // Adjust the width based on the Samsung Fold's viewport
        sm: "425px",
      },
    },
    darkMode: "class",
    fontFamily: { sans: ["Roboto", "sans-serif"] },
  },
  plugins: [],
};
