export default defineNuxtConfig({
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**',
    ],
  },
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
      trailingSlash: false,
      mode: process.env.NODE_ENV,
      strapi_base_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8886' : 'https://cms.marlene.top',
      graphql_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8886/graphql' : 'https://cms.marlene.top/graphql',
    },
    indexable: true,
    siteUrl: 'https://bytedream.top',
    strapi_token: '4b5b71c47a604af29fc3005b2e50f46ce5182af0cf41b81bb5ef984db70b3760fa6ee1d08c9e47ac7ab579745ffce148352e05c09cad683128516ad2e74148cf5788f9123c278a13e01f5ebff14d555927eab2c2d7948afebce75142a838c27a9e1867b6b03feed1fb45c525ee0f3277320f20059e06730f8d2c014d0a0d6c15',
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
