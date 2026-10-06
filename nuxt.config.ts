export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Canvas Hotel — Stay awhile',
      meta: [
        { name: 'description', content: 'A small, thoughtful hotel for curious people. Find your room at Canvas Hotel.' },
        { name: 'theme-color', content: '#17302c' },
      ],
    },
  },
})
