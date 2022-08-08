/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      colors:{
        primary:"#1db954",
        bgback:"rgb(40, 44, 52)",
      }
    },
  },
  plugins: [],
}
