<script setup lang="ts">
import type { IArticleItem } from '~~/types/IArticleItem'
const { data: articleAds } = (await useFetch('/api/global/ad'))
const route = useRoute()
let pagenum = 1
const { data: artlist, pending } = await useFetch<IArticleItem[]>(() => `/api/articles/list?sort=${route.query?.sort || 'recommended'}&type=${route?.params?.type || ''}&pageNum=1&tag=${route?.params?.tag || ''}`)
const addArtListItem = useThrottle(async () => {
  if (useScrollBottom() && artlist.value != null) {
    const { data } = await useFetch<IArticleItem[]>(`/api/articles/list?sort=${route.query?.sort || 'recommended'}&type=${route?.params?.type || ''}&pageNum=${++pagenum}&tag=${route?.params?.tag || ''}`)
    if (!data.value)
      return
    artlist.value.push(...data.value)
  }
})
watch(route, () => {
  pagenum = 1
}, { immediate: true, deep: true })
provide('artlist', artlist)
provide('ads', articleAds)
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
      <ArticlesListUiSkeleton v-if="pending || !artlist?.length" />
      <ArticlesListItem v-else />
    </ClientOnly>
  </div>
</template>
