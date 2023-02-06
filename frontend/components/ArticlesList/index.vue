<script setup lang="ts">
const artlist = useArtlist(await useFetchPostData())
const { data: articleAds } = (await useFetch('/api/global/ad'))
const isLoading = useState('isLoading', () => true)
const route = useRoute()
let pagenum = 1
const addArtListItem = useThrottle(async () => {
  useScrollBottom() && artlist.value.push(...(await useFetchPostData(route?.params, route.query?.sort, ++pagenum)))
})
provide('artlist', artlist)
provide('ads', articleAds)
watch(route, async (r) => {
  artlist.value = []
  artlist.value = await useFetchPostData(route?.params, route.query?.sort, pagenum = 1)
}, { deep: true, immediate: true })
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
