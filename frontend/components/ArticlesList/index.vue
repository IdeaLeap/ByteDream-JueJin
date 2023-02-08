<script setup lang="ts">
import type { IArticleItem } from '~~/types/IArticleItem'
const artlist = useState<IArticleItem[]>(() => [])
const articleAds = (await useFetch('/api/global/ad')).data.value
const isLoading = useState(() => true)
const route = useRoute()
let pagenum = 1
const addArtListItem = useThrottle(async () => {
  useScrollBottom() && artlist.value.push(...(await useFetchPostData(route.path, route.query?.sort, ++pagenum)))
})
provide('artlist', artlist)
provide('ads', articleAds)
watch(route, async () => {
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
  <div class="bg-jj-article">
    <ArticlesListNavigation />
    <ArticlesListUiSkeleton v-if="isLoading || !artlist.length" />
    <ClientOnly v-else>
      <ArticlesListItem />
    </ClientOnly>
  </div>
</template>
