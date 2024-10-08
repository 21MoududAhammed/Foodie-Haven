/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilory: ["Gilory", "sans-serif"],
      },
      colors: {
        primary: "#e10101",
        secondary: '#616161'
      },
      backgroundColor: {
        primary: "#e10101",
      },
    },
  },
  plugins: [],
};
