const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#d39c0b",
        brandPrimary: "#00463e",
        neutralGrey: "#717171",
        gray900: "#18191F",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
