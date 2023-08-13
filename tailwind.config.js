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
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}
