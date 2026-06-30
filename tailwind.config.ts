import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Base canvas
        void: "#0A0E17",
        surface: "#0F1521",
        "surface-raised": "#131A29",
        line: "#1C2433",
        // Signal colors (from brief)
        primary: {
          DEFAULT: "#00FFB2",
          dim: "#00B280",
        },
        secondary: {
          DEFAULT: "#00D4FF",
          dim: "#0099B8",
        },
        critical: "#FF4D4D",
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#A8B4C4",
          faint: "#7A8799",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        scan: "scan 6s linear infinite",
        "marquee-left": "marquee-left var(--marquee-duration, 30s) linear infinite",
        "marquee-right": "marquee-right var(--marquee-duration, 30s) linear infinite",
        "bounce-icon": "bounce-icon 0.6s ease-in-out",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "bounce-icon": {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-6px)" },
          "40%": { transform: "translateY(2px)" },
          "60%": { transform: "translateY(-3px)" },
          "80%": { transform: "translateY(1px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
