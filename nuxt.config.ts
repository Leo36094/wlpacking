import { defineNuxtModule } from 'nuxt/kit';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/mixins.scss";
          `,
        },
      },
    },
  },

  modules: ['@nuxt/image', '@nuxtjs/tailwindcss'],
});
