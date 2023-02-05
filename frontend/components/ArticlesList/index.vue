<script setup lang="ts">
const artlistData = useArtlist(await useFetchPostData())
const { data } = await useFetch('/api/global')
const route = useRoute()
let pagenum = 1
const isLoading = useState('isLoading', () => false)
const isEmpty = useState('isEmpty', () => false)
const articleAds = data.value.articleAds
const addArtListItem = async () => {
  if (useScrollBottom()) {
    const artlistVal = await useFetchPostData(route.path, route.query?.sort, pagenum++)
    artlistData.value.push(...artlistVal)
  }
}

const bottomHandler = useThrottle(addArtListItem)
watch(route, async () => {
  pagenum = 1
  isLoading.value = true
  const artlistVal = await useFetchPostData(route.path, route.query?.sort)
  if (!artlistVal?.length) {
    isEmpty.value = true
    return
  }
  artlistData.value = artlistVal
  isLoading.value = false
  isEmpty.value = false
}, { deep: true })
onBeforeMount(() => {
  const EmployeeWindow = window as any
  EmployeeWindow.addEventListener('scroll', bottomHandler)
})
onUnmounted(() => {
  const EmployeeWindow = window as any
  EmployeeWindow.removeEventListener('scroll', bottomHandler)
})
</script>

<template>
  <div class="articlelist">
    <ArticlesListNavigation />
    <ArticlesListUiSkeleton v-if="isEmpty || isLoading" />
    <ul v-else>
      <ArticlesListItemAds
        :title="articleAds.title"
        :author="articleAds.author"
        :summary="articleAds.summary"
        :cover="articleAds.cover"
        :url="articleAds.url"
      />
      <ArticlesListItem
        v-for="item in artlistData"
        :key="item.id"
        :uid="item.id"
        :title="item.title"
        :viewed="item.viewed"
        :liked="item.liked"
        :commented="item.commented"
        :summary="item.summary"
        :cover="item.cover"
        :created-at="item.createdAt"
        :author-id="item.authorId"
        :tags="item.tagIds.data"
      />
    </ul>
  </div>
</template>

<style scoped>
.articlelist {
  @apply bg-jj-article
}
</style>
