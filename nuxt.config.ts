// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/ui',
  ],

  unocss: {
    autoImport: false,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  compatibilityDate: '2024-07-25',
})
