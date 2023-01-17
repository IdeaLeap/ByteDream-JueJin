<script setup>
// import { OgImageScreenshot, SeoKit } from 'nuxt-seo-kit'
defineOgImage({
  component: 'Banner', // Nuxt Island component
  alt: 'JueJin | ByteDream', // alt text for image
  // pass in any custom props
  myCustomTitle: 'JueJin',
})
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: 'https://bytedream.top/' },
    {},
  ],
  meta: [
    {
      rel: 'icon', type: 'image/png', href: '/favicon.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <SeoKit />
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
