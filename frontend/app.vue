<script setup>
// import { OgImageScreenshot, SeoKit } from 'nuxt-seo-kit'
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
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
