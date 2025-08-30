/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js or similar structures
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If using Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if you have a public folder for static HTML
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#FDFDFD",
        "sage-green": "#A3B18A",
        "soft-terracotta": "#D98C7B",
        "dark-charcoal": "#343A40",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
