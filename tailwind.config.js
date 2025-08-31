/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 클래스 기반 다크 모드 활성화
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "#fdfdfd",
        "light-text": "#343a40",
        "light-card": "#ffffff",
        "light-border": "#e0e0e0",

        "dark-bg": "#1e293b", // 네이비/차콜 배경
        "dark-text": "#cbd5e1", // 밝은 회색 텍스트
        "dark-card": "#334155", // 카드 배경
        "dark-border": "#475569", // 경계선
        "dark-heading": "#e2e8f0", // 제목 색상

        "pcb-green": "#10b981", // PCB 기판 녹색
        "signal-blue": "#3b82f6", // 신호 파형 파란색
        "signal-orange": "#f97316", // 신호 파형 주황색
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
