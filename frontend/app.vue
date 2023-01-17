<script setup>
// import { OgImageScreenshot, SeoKit } from 'nuxt-seo-kit'
</script>

<template>
  <NuxtLayout>
    <SeoKit />
    <OgImage component="Banner" my-custom-title="JueJin | ByteDream" background-image="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F163786%2F120faf0c-b0ce-e482-e0aa-382a30443b2a.png" runtime="true" />
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
