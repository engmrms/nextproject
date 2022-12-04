/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}", "./Core/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      5.2: ["5.2rem", { lineHeight: "8.0rem" }],
      4.6: ["4.6rem", { lineHeight: "6.8rem" }],
      4.2: ["4.2rem", { lineHeight: "6.3rem" }],
      3.2: ["3.2rem", { lineHeight: "4.8rem" }],
      "3.0": ["3.0rem", { lineHeight: "4.3rem" }],
      2.6: ["2.6rem", { lineHeight: "4rem" }],
      2.4: ["2.4rem", { lineHeight: "3.6rem" }],
      2.2: ["2.2rem", { lineHeight: "3.4rem" }],
      "2.0": ["2.0rem", { lineHeight: "3rem" }],
      1.8: ["1.8rem", { lineHeight: "2.7rem" }],
      1.6: ["1.6rem", { lineHeight: "2.7rem" }],
      1.4: ["1.4rem", { lineHeight: "2.4rem" }],
      1.2: ["1.2rem", { lineHeight: "2.2rem" }],
      "1.0": ["1.0rem", { lineHeight: "2.0rem" }],
    },
  },
  plugins: [],
};
