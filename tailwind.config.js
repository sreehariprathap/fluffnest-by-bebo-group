/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "node_modules/preline/dist/*.js",
  "assets/styles/**/*.{css,scss}",
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
  plugins: [require("preline/plugin")],
}
