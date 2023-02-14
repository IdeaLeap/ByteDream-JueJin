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
    'nuxt-meilisearch',
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
    strapi_token: process.env.STRAPI_TOKEN,
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
  meilisearch: {
    hostUrl: process.env.MEILISEARCH_HOST,
    searchApiKey: process.env.SEARCH_API_KEY,
    adminApiKey: process.env.SEARCH_ADMIN_API_KEY,
    serverSideUsage: true,
    instantSearch: {
      theme: 'algolia',
    },
  },
})
