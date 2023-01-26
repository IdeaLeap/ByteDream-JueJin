<!-- eslint-disable no-console -->
<script setup lang="ts">
const route = useRoute()
const url = ref(`/api/articles/${route.params.id}`)
const { data: articleData } = await useFetch(url)
// console.log(articleData.value.article)
</script>

<template>
  <div class="view-container">
    <main class="container main-container" style="max-width: 1140px">
      <div class="view column-view" bg-yello>
        <ArticlesContentSideBarLeft :commented="articleData.article.commented" :liked="articleData.article.liked" />
        <ArticlesContent :article="articleData.article" />
        <ClientOnly>
          <ArticlesContentSideBarRight :content="articleData.article.content" :author="articleData.article.authorId" />
        </ClientOnly>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
.main-container > .view {
  margin-top: 1.767rem;
}
.column-view {
  padding: 0 0 8rem;
}
@media screen and (max-width: 1320px) and (min-width: 1140px) {
  .view-container {
    width: 1320px;
  }
}
</style>
