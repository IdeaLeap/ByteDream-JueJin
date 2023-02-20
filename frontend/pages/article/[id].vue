<script setup lang="ts">
import type { IArticle } from '@/types/IArticle'
const route = useRoute()
const url = ref(`/api/articles/${route.params.id}`)

const { data: articleData } = await useFetch(url)
const articleDataList = ref<IArticle>()
articleDataList.value = articleData.value
useHead({
  title: articleDataList.value?.title ?? '文章不存在',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: articleDataList.value?.summary,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: articleDataList.value?.tagIds.data.join(','),
    },
  ],
})
const isRender = useState('isRender', () => false)
onMounted(() => {
  isRender.value = true
})
</script>

<template>
  <div class="view-container">
    <main class="container main-container relative w-100% max-w-960px my-0 mx-auto" style="max-width: 1140px">
      <div v-show="isRender" class="view column-view mt-1.767rem" pb-8rem>
        <ArticlesContentSideBarLeft :commented="articleDataList?.commented" :liked="articleDataList?.liked" />
        <div class="main-area article-area">
          <ArticlesContent :article="articleDataList" />
          <div class="article-end">
            <ArticlesContentEndTagList :type="articleDataList?.typeId" :tag="articleDataList?.tagIds.data" />
            <ArticlesContentEndColumnContainer v-if="articleDataList?.columId.data.length !== 0" :column="articleDataList?.columId.data" />
          </div>
        </div>
        <ArticlesContentSideBarRight :article="articleDataList" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.view-container {
  @apply bg-jj-main;
}
@media (max-width: 1320px) and (min-width: 1140px) {
  .view-container {
    width: 1320px;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
}

.main-area {
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  width: 820px;
  max-width: 100%;
  @apply bg-jj-article mb-1.5rem;
}

@media (max-width: 1140px) {
  .main-area {
    width: calc(100% - 26.67rem);
  }
}

@media (max-width: 1000px) {
  .article-area {
    margin-bottom: 0;
  }
  .main-area {
    width: 100%;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.main-area .article-end {
  padding-top: 10px;
  border-radius: 0 0 4px 4px;
  padding-bottom: 3.33rem;
}
</style>
