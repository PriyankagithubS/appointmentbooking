/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6fff",
        secondary: "#facc15",
        dark: "#1e293b",
        light: "#f3f4f6",
        blue:"#0d47a1"
      },
    },
  },
  plugins: [],
}