/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animations: {
      shimmer: {
        "0%": { "background-position": "0% 0%" },
        "100%": { "background-position": "-200% 0%" },
      },
    },
    animation: {
      shimmer: "shimmer 2s linear infinite",
    },
  },
};