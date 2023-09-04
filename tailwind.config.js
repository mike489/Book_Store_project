/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        "main-green-color": "#237943",
        "secondary-default-color": "bg-red-500",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
