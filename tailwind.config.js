/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: "#A50000",
          green: "#008000",
        },
      },
    },
  },
  plugins: [],
};
