/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00F5FF",
        secondary: "#7B61FF",
        dark: "#0a0a0a",
      },
      fontFamily: {
        futuristic: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
