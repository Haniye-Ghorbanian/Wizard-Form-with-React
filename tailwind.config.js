/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["IRANYekan"],
      },
      transitionTimingFunction: {
        "in-back": "cubic-bezier(0.68, -0.75, 0.265, 1.55)",
      },
      padding: {
        '3.5': '0.85rem',
      }
    },
  },
  plugins: [],
};
