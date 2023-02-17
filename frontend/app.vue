<script setup>
// import { OgImageScreenshot, SeoKit } from 'nuxt-seo-kit'
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: 'https://bytedream.top' },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'JueJin' },
    { name: 'description', content: 'JueJin | ByteDream' },
    { name: 'keywords', content: 'JueJin, ByteDream' },
    { name: 'author', content: 'ByteDream' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'viewport', content: 'initial-scale=1,maximum-scale=5' },
    { name: 'robots', content: 'index, follow' },
    { name: 'applicable-device', content: 'pc,mobile' },
    { name: 'google', content: 'notranslate' },
    { name: 'google-site-verification', content: 'google-site-verification' },
    { name: 'msapplication-TileImage', content: '/favicon.png' },
    { name: 'msapplication-config', content: '/browserconfig.xml' },
    { name: 'msapplication-tap-highlight', content: 'no' },
    { name: 'msapplication-tooltip', content: 'JueJin' },
    { name: 'msapplication-starturl', content: '/' },
    { name: 'msapplication-navbutton-color', content: '#000000' },
    { name: 'msapplication-task', content: 'name=JueJin;action-uri=/;icon-uri=/favicon.png' },
    { name: 'msapplication-task-separator', content: 'JueJin' },
    { name: 'msapplication-square70x70logo', content: '/favicon.png' },
    { name: 'msapplication-square150x150logo', content: '/favicon.png' },
    { name: 'msapplication-wide310x150logo', content: '/favicon.png' },
    { name: 'msapplication-square310x310logo', content: '/favicon.png' },
    { name: 'msapplication-notification', content: 'frequency=30;polling-uri=/favicon.png;polling-uri2=/favicon.png;polling-uri3=/favicon.png;polling-uri4=/favicon.png;cycle=1' },
    { name: 'msapplication-window', content: 'width=1024;height=768' },
    { name: 'msapplication-badge', content: 'frequency=30;polling-uri=/favicon.png;polling-uri2=/favicon.png;polling-uri3=/favicon.png;polling-uri4=/favicon.png;cycle=1' },
    { name: 'baidu-site-verification', content: '' },
  ],
})

// 自动隐藏导航栏
const isNavShown = ref(true)
provide('isNavShown', isNavShown)
if (process.client) {
  const { directions, isScrolling, arrivedState } = useScroll(document)
  const checkHeaderStatus = useDebounceFn(
    (top, bottom, topArrived) => {
      if (topArrived) {
        isNavShown.value = true
        return
      }
      if (top)
        isNavShown.value = true

      else if (bottom)
        isNavShown.value = false
    },
    100,
  )
  watch(directions, () => {
    if (isScrolling.value)
      checkHeaderStatus(directions.top, directions.bottom, arrivedState.top)
  })
}
</script>

<template>
  <NuxtLayout>
    <SeoKit />
    <OgImageScreenshot />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  font-size: 12px;
  height: 100vh;
  margin: 0;
  padding: 0;
  @apply bg-jj-main;
}
</style>
