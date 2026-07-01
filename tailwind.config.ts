import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0B7B6B",
          50: "#EAF6F3",
          100: "#D4EDE7",
          600: "#0B7B6B",
          700: "#095F53",
        },
        dark: {
          DEFAULT: "#0A2420",
          800: "#0E2F29",
        },
        mint: "#F0FAF8",
        gold: "#C9A268",
        cta: "#00C896",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(10, 36, 32, 0.12)",
        softer: "0 4px 20px -6px rgba(10, 36, 32, 0.08)",
        lift: "0 20px 40px -12px rgba(11, 123, 107, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
