/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "full-blue": "#161821",
        "md-blue": "#282F44",
        goldish: "#E6AF2E",
      },
    },
  },
  plugins: [],
};
