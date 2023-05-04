/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "off-white": "#FAF9F6",
        "primary-color": "#eef2ff",
        "secondary-color": "#827cee",
      },
    },
  },
  plugins: [],
};
