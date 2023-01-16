<script setup>
useHead({
  title: 'JueJin | ByteDream',
  link: [
    { rel: 'icon', type: 'image/png', href: '/nuxt.png' },
    { rel: 'canonical', href: 'https://bytedream.top/' },
    {},
  ],
  meta: [
    { name: 'description', content: 'Yet Another Blog In JueJin Style By ByteDream.' },
    { property: 'og:title', title: 'JueJin | ByteDream' },
    { property: 'og:site_name', siteName: 'JueJin | ByteDream' },
    { property: 'og:url', url: 'https://bytedream.top' },
    { property: 'og:type', type: 'website' },
    { robots: 'follow, index' },
    { name: 'image', property: 'og:image', image: 'https://picxyxsw.oss-cn-hangzhou.aliyuncs.com/20230116155200.png' },
    { property: 'og:description', content: 'Yet Another Blog In JueJin Style By ByteDream' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
