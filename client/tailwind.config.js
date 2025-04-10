import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#141415", // 141415 or DEFAULT

            foreground: "#FFFFFF", // or 50 to 900 DEFAULT
            primary: { DEFAULT: "#3440c8", foreground: "#FFFFFF" },
          },
        },
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C",
            rimary: { DEFAULT: "#3440c8", foreground: "#FFFFFF" },
          },
        },
      },
    }),
  ],
};

module.exports = config;
