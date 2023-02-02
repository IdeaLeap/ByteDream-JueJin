<!-- eslint-disable no-console -->
<script setup lang="ts">
const route = useRoute()
const url = ref(`/api/articles/${route.params.id}`)
const { data: articleData } = await useFetch(url)
</script>

<template>
  <div class="view-container">
    <main class="container main-container relative w-100% max-w-960px my-0 mx-auto" style="max-width: 1140px">
      <div class="view column-view mt-1.767rem" pb-8rem>
        <ArticlesContentSideBarLeft :commented="articleData.article.commented" :liked="articleData.article.liked" />
        <ArticlesContent :article="articleData.article" />
        <ClientOnly>
          <ArticlesContentSideBarRight :related-articles="articleData.article.columId.articles.data" :content="articleData.article.content" :author="articleData.article.authorId" />
        </ClientOnly>
      </div>
    </main>
  </div>
</template>

<style scoped>
.view-container{
  @apply bg-jj-main
}
@media screen and (max-width: 1320px) and (min-width: 1140px) {
  .view-container {
    width: 1320px;
  }
}
</style>
