/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        secundary: ['Bebas Neue', 'sans-serif'],
        primary: ['Open Sans', 'sans-serif'],
      },
      colors: {
        bgButtonPurchase: 'rgba(61,184,165,0.2)',
        buttonPurchase: 'rgba(61,184,165)',
      },
    },
  },
  plugins: [],
};
