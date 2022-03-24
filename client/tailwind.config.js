const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      accent: "#49ae49",
      neutral: "#f8f8f8",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      pink: "#e50a80",
    },
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  important: true,
};
