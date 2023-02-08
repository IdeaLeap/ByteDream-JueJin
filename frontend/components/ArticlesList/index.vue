<script setup lang="ts">
const initialArtlist = await useFetchPostData()
const artlist = useState('artlist', () => initialArtlist)
const articleAds = (await useFetch('/api/global')).data.value.articleAds
const isLoading = useState(() => true)
const route = useRoute()
let pagenum = 1
const addArtListItem = useThrottle(async () => {
  useScrollBottom() && artlist.value.push(...(await useFetchPostData(route.path, route.query?.sort, ++pagenum)))
})
provide('artlist', artlist)
provide('ads', articleAds)
watch(route, async (r) => {
  const paths = route.path.split('/')
  const params = {
    type: paths[1],
    tag: paths[2],
  }
  artlist.value = []
  artlist.value = await useFetchPostData(params, route.query?.sort, pagenum = 1)
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
      <ArticlesListItemAds />
      <ArticlesListItem />
    </ul>
  </div>
</template>

<style scoped>
.articlelist {
  @apply bg-jj-article
}
</style>
