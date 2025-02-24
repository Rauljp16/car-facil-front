import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "#7d7d7d",
        contrast: "#d0d0d0",
        greenCarFacil: "#25d972",
      },
      fontFamily: {
        grechen: ["var(--font-grechen-fuemen)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },

    },
  },
  plugins: [],
} satisfies Config;
