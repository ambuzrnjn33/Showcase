/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Popins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "user-profile": "url('./src/assets/user-profile-bg.png')",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
