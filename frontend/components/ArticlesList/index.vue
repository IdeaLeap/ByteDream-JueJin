<script setup lang="ts">
import type { IArticleItem } from '~~/types/IArticleItem'
const artlist = useState<IArticleItem[]>('artlist', () => [])
const { data: articleAds } = (await useFetch('/api/global/ad'))
const isLoading = useState('isLoading', () => true)
const route = useRoute()
let pagenum = 1
const addArtListItem = useThrottle(async () => {
  useScrollBottom() && artlist.value.push(...(await useFetchPostData(route?.params, route.query?.sort, ++pagenum)))
})
provide('artlist', artlist)
provide('ads', articleAds)
watch(route, async () => {
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
  <div class="bg-jj-article">
    <ArticlesListNavigation />
    <ArticlesListUiSkeleton v-if="isLoading || !artlist.length" />
    <ClientOnly v-else>
      <ArticlesListItem />
    </ClientOnly>
  </div>
</template>
