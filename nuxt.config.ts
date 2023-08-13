// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  pages: true,
  css: ["~/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    // "@nuxtjs/tailwindcss",
    // "@nuxtjs/i18n",
    // "@nuxtjs/supabase",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  app: {
    head: {
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
    },
  },
})
