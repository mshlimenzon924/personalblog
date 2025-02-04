/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkMain: "#FA9DA6",
        pinkLight: "#FBCCD4",
        greenMain: "#8EB694",
        creamMain: "#FBE2C6",
        yellowMain: "#FBDFA2",
      },
    },
  },
  plugins: [],
};

