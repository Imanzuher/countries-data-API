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
      width: {
        470: "470px",
      },
      fontFamily: {
        nunito: ["nunito", "sans"],
      },
      screens: {
        mobile: { min: "325px", max: "500px" },
        tablet_1: { min: "501px", max: "600px" },
        tablet_2: { min: "601px", max: "800px" },
        tablet_3: { min: "801px", max: "1000px" },
        desktop: { min: "1001px", max: "1440px" },
      },
    },
  },
  plugins: [],
};
