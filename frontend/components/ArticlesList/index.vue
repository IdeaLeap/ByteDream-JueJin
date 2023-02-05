<script setup lang="ts">
const articleList = useArtlist(await useFetchPostData())
const articleAds = (await useFetch('/api/global')).data.value.articleAds
const isLoading = useState('isLoading', () => true)
const route = useRoute()
let pagenum = 1
const addArtListItem = useThrottle(async () => {
  useScrollBottom() && articleList.value.push(...(await useFetchPostData(route.path, route.query?.sort, ++pagenum)))
})
watch(route, async () => {
  articleList.value = []
  articleList.value = await useFetchPostData(route.path, route.query?.sort, pagenum = 1)
}, { deep: true })
onMounted(() => {
  (window as any).addEventListener('scroll', addArtListItem)
  isLoading.value = false
})
onUnmounted(() => {
  (window as any).removeEventListener('scroll', addArtListItem)
})
</script>

<template>
  <div class="articlelist">
    <ArticlesListNavigation />
    <ArticlesListUiSkeleton v-if="isLoading || !articleList.length" />
    <ul v-else>
      <ClientOnly>
        <ArticlesListItemAds
          :title="articleAds.title" :author="articleAds.author"
          :summary="articleAds.summary" :cover="articleAds.cover" :url="articleAds.url"
        />
        <ArticlesListItem
          v-for="item in articleList"
          :key="item.id" :uid="item.id" :title="item.title"
          :viewed="item.viewed" :liked="item.liked" :commented="item.commented"
          :summary="item.summary" :cover="item.cover" :created-at="item.createdAt"
          :author-id="item.authorId" :tags="item.tagIds.data"
        />
      </ClientOnly>
    </ul>
  </div>
</template>

<style scoped>
.articlelist {
  @apply bg-jj-article
}
</style>
