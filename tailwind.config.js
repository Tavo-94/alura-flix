/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-background": "#262626",
        "secondary-background": "#030910",
        "accent-dark": "#2271D1",
        "accent-darker": "#03122F",
        "front-end": "#6BD1FF",
        "back-end": "#00C86F",
        "innovación-gestión": "#FFBA05"
        ,
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/bannerBgImg.png')",
      },
    },
    plugins: [],
  },
};
