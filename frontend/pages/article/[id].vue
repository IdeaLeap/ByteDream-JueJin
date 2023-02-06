<!-- eslint-disable no-console -->
<script setup lang="ts">
const route = useRoute()
const url = ref(`/api/articles/${route.params.id}`)
const { data: articleData } = await useFetch(url)
const isRender = useState('isRender', () => false)
onMounted(() => {
  isRender.value = true
})
</script>

<template>
  <div class="view-container">
    <main class="container main-container relative w-100% max-w-960px my-0 mx-auto" style="max-width: 1140px">
      <div v-show="isRender" class="view column-view mt-1.767rem" pb-8rem>
        <ArticlesContentSideBarLeft :commented="articleData.article.commented" :liked="articleData.article.liked" />
        <div class="main-area article-area" mb-1.5rem>
          <ArticlesContent :article="articleData.article" />
          <ArticlesContentEnd :type="articleData.article.typeId" :tag="articleData.article.tagIds" />
        </div>
        <ArticlesContentSideBarRight :article="articleData.article" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.view-container {
  @apply bg-jj-main;
}
@media screen and (max-width: 1320px) and (min-width: 1140px) {
  .view-container {
    width: 1320px;
  }
}
.main-area {
  border-radius: 4px;
  /* background-color: #fff; */
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  box-sizing: border-box;
  position: relative;
  width: 820px;
  max-width: 100%;
  @apply bg-jj-article;
}
@media screen and (max-width: 1140px) {
  .main-area {
    width: calc(100% - 26.67rem);
  }
}

@media screen and (max-width: 1000px) {
  .article-area {
    margin-bottom: 0;
  }
  .main-area {
    width: 100%;
  }
}
@media screen and (max-width: 1000px) {
  .main-area {
    border: none;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
