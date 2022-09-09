module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        gray: "#36393F",
        blue: "#5865F1",
        white: "#DCDDDE",
        "light-blue": "#00AFF4",
        "light-gray": "#87898C",
        "dark-gray": "#202225",
        "dark-blue": "#4A55CB",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
