/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#102C57",
        secondary: "#FEFAF6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
