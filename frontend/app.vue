<script setup>
import { NConfigProvider, darkTheme } from 'naive-ui'

useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
const color = useColorMode()
const dark = computed(() => color.value === 'dark')
const isDark = computed(() => dark.value ? darkTheme : 'light')
</script>

<template>
  <NConfigProvider :theme="isDark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
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
