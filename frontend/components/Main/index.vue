<script setup>
const { data: GlobalData } = await useFetch('/api/global')
</script>

<template>
  <div class="container main_container">
    <div class="pt-5.17rem">
      <Types class="left-0" />
      <div class="timeline-container mt-0 relative 0.33rem">
        <ArticlesList class="mr-21.667rem w-full mlg:w-700px" :article-ads="GlobalData.articleAds" />
        <Aside class="absolute display-none top-0 right-0 mlg:display-block" :global-data="GlobalData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main_container {
  @apply my-0 mx-auto
  @apply block relative w-[100%] max-w-[960px]
}
</style>
