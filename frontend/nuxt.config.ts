export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    preset: 'vercel',
  },
  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width',
      title: 'JueJin | ByteDream',
      meta: [
        { name: 'description', content: 'Yet Another Blog In JueJin Style By ByteDream.' },
      ],
    },
  },
})
