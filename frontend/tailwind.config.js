/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./styles/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        kinn: "Kinn"
      }
    }
  },
  plugins: []
};
