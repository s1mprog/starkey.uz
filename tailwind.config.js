/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "480px", 
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
      }
    },
  },
  plugins: [],
}

