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
    componentIslands: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  extends: [
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://bytedream.top',
      siteName: 'JueJin | ByteDream',
      siteDescription: 'Yet Another Blog In JueJin Style By ByteDream',
      language: 'zh-CN',
      titleSeparator: '·',
      trailingSlash: true,
    },
    indexable: true,
    siteUrl: 'https://bytedream.top',
  },
  sitemap: {
    hostname: 'https://bytedream.top',
    exclude: [
      '/**',
    ],
  },
  head: {
    ogTitleTemplate: '%s | ByteDream',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },
})
