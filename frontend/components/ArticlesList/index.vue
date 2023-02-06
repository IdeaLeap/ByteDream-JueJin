<script setup lang="ts">
const artlist = useArtlist(await useFetchPostData())
const articleAds = (await useFetch('/api/global')).data.value.articleAds
const isLoading = useState('isLoading', () => true)
const route = useRoute()
let pagenum = 1
const addArtListItem = useThrottle(async () => {
  useScrollBottom() && artlist.value.push(...(await useFetchPostData(route.path, route.query?.sort, ++pagenum)))
})
provide('artlist', artlist)
provide('ads', articleAds)
watch(route, async () => {
  artlist.value = []
  artlist.value = await useFetchPostData(route.path, route.query?.sort, pagenum = 1)
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
    <ArticlesListUiSkeleton v-if="isLoading || !artlist.length" />
    <ul v-else>
      <ClientOnly>
        <ArticlesListItemAds />
        <ArticlesListItem />
      </ClientOnly>
    </ul>
  </div>
</template>

<style scoped>
.articlelist {
  @apply bg-jj-article
}
</style>
