/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mode-dark-blue": "hsl(209, 23%, 22%)",
        "bg-dark-blue": "hsl(207, 26%, 17%)",
        "text-dark-blue": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "light-gray": "hsl(0, 0%, 98%)",
        "el-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        nunito: ["nunito", "sans"],
      },
      screens: {
        mobile: { max: "375px" },
        desktop: { min: "1440px" },
      },
    },
  },
  plugins: [],
};
