<script setup>
const route = useRoute()
</script>

<template>
  <div class="container main-container">
    <div class="pt-5.17rem">
      <Types class="left-0" />
      <TypesTagNav v-if="route?.params?.type" />
      <div class="timeline-container mt-0 relative 0.33rem">
        <ArticlesList class="mr-21.667rem w-full mlg:w-700px" />
        <Aside class="absolute display-none top-0 right-0 mlg:display-block" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  @apply my-0 mx-auto
  @apply block relative w-[100%] max-w-[960px]
}
</style>
