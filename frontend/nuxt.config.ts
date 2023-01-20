export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    'nuxt-umami',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/main.css',
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
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
      trailingSlash: false,
      mode: process.env.NODE_ENV,
      strapi_base_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8886' : 'https://cms.marlene.top',
      graphql_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8886/graphql' : 'https://cms.marlene.top/graphql',
    },
    indexable: true,
    siteUrl: 'https://bytedream.top',
  },
  sitemap: {
    hostname: 'https://bytedream.top',
    exclude: [
      './*',
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
  linkChecker: { failOn404: false },
  umami: {
    enable: true, // enable the module? true by default
    autoTrack: true,
    doNotTrack: false,
    cache: false,
    domains: 'bytedream.top',
    websiteId: 'f0ab5003-8840-46dc-956b-36dbabc6fa4f',
    scriptUrl: 'https://analytics.umami.is/script.js',
  },
})
