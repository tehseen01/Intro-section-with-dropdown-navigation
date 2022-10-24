/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-black": "hsl(0, 0%, 8%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-white": "hsl(0, 0%, 98%)",
      },
      spacing: {
        85: "85%",
        ml2: "-3.8rem",
        l15: "-15rem",
        "29r": "29rem",
      },
    },
  },
  plugins: [],
};
