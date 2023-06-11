/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        secundary: ['Bebas Neue', 'sans-serif'],
        primary: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
