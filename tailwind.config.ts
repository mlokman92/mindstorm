import type { Config } from "tailwindcss";

/**
 * MindstormX design tokens. See DESIGN.md for the contract.
 * Core brand colors: brand #4B4BFF · ink #000000 · white #FFFFFF.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4B4BFF",
          50: "#EEEEFF",
          100: "#DCDCFF",
          200: "#C2C2FF",
          300: "#9B9BFF",
          400: "#6E6EFF",
          500: "#4B4BFF",
          600: "#3B3BE0",
          700: "#2E2EB8",
          800: "#262696",
          900: "#1F1F73",
        },
        ink: "#000000",
        navy: {
          950: "#070A1A",
          900: "#0B1020",
          800: "#121933",
          700: "#1C2547",
          600: "#28335C",
        },
        slate: {
          50: "#F7F8FB",
          100: "#EEF1F6",
          200: "#E2E6EE",
          300: "#CBD2DE",
          400: "#9AA3B2",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(16,24,40,0.06), 0 1px 2px rgba(16,24,40,0.04)",
        lift: "0 12px 40px -12px rgba(75,75,255,0.25)",
        glow: "0 0 80px -10px rgba(75,75,255,0.45)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
