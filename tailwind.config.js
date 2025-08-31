/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "#fdfdfd",
        "light-text": "#343a40",
        "light-card": "#ffffff",
        "light-border": "#e0e0e0",
        "dark-bg": "#1e293b",
        "dark-text": "#cbd5e1",
        "dark-card": "#334155",
        "dark-border": "#475569",
        "dark-heading": "#e2e8f0",
        "pcb-green": "#10b981",
        "signal-blue": "#3b82f6",
        "signal-orange": "#f97316",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
        serif: ['"Cormorant Garamond"', "serif"],
        mono: ['"D2Coding"', '"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};
