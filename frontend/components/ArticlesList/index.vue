<script setup lang="ts">
import type { IArticleItem } from '~~/types/IArticleItem'
const artlist = useState<IArticleItem[]>('artlist', () => [])
const { data: articleAds } = (await useFetch('/api/global/ad'))
const isLoading = useState('isLoading', () => false)
const route = useRoute()
let pagenum = 1
const addArtListItem = useThrottle(async () => {
  useScrollBottom() && artlist.value?.length && artlist.value.push(...(await useFetchPostData(route?.params, route.query?.sort, ++pagenum)))
})
provide('artlist', artlist)
provide('ads', articleAds)
watch([() => route.query, () => route.params], async () => {
  isLoading.value = true
  artlist.value = await useFetchPostData(route?.params, route.query?.sort, pagenum = 1)
  isLoading.value = false
}, { deep: true, immediate: true })
onMounted(() => {
  (window as any).addEventListener('scroll', addArtListItem)
})
onUnmounted(() => {
  (window as any).removeEventListener('scroll', addArtListItem)
})
</script>

<template>
  <div class="bg-jj-article">
    <ArticlesListNavigation />
    <ClientOnly>
      <template #fallback>
        <ArticlesListUiSkeleton />
      </template>
      <ArticlesListUiSkeleton v-if="isLoading || !artlist?.length" />
      <ArticlesListItem v-else />
    </ClientOnly>
  </div>
</template>
