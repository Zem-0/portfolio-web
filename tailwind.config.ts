import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#03050f",
        "base-2": "#070b1a",
        "base-3": "#0c1228",
        accent: "#38bdf8",
        "accent-glow": "#0ea5e9",
        "accent-2": "#1d4ed8",
        "text-primary": "#e2eaf8",
        "text-muted": "#7a8fb5",
        "text-dim": "#3d4f70",
      },
      borderColor: {
        DEFAULT: "rgba(56,189,248,0.08)",
        bright: "rgba(56,189,248,0.25)",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        section: "1100px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        shimmer: "shimmer 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
