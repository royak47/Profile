import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F0D0B",
        panel: "#17140F",
        panelborder: "#2A241A",
        amber: "#FFB300",
        amberdim: "#8A6A1F",
        ink: "#F5EFE3",
        muted: "#8A8272",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadein: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadein: "fadein 0.5s ease-out forwards",
        scan: "scan 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
