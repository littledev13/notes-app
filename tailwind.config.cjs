/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Itim: ["Itim", "cursive"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
