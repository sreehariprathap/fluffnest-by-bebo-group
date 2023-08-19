/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/styles/**/*.{css,scss}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        screens: {
          xsm: "0px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
        primary: "##38bdf8",
        "primary-dark": "#2563eb",
        "primary-light": "#7dd3fc",
        "dark-main": "#181818",
        "dark-secondary": "#272829",
        light: "#F7F7F7",
        danger:'#EF6262',
        warning:'#FF8400',
        success :'#009A66'
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
}
