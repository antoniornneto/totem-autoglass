import { colors } from "./src/styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily: {
        regularOnest: "Onest-Regular",
        mediumOnest: "Onest-Medium",
        boldOnest: "Onest-Bold",
      },
    },
  },
  plugins: [],
};
