<script setup lang="ts">
const route = useRoute()
let pagenum = 1
const isLoading = useState('isLoading', () => false)
const isEmpty = useState('isEmpty', () => false)
const artlistData = useArtlist(await useFetchPostData())
const addArtListItem = () => {
  if (useScrollBottom()) {
    pagenum++
    useFetchPostData(route.path, route.query?.sort, pagenum).then((data) => {
      artlistData.value.push(...data)
    })
  }
}
const { data } = await useFetch('/api/global')
const articleAds = data.value.articleAds
watch(route, () => {
  pagenum = 1
  isLoading.value = true
  useFetchPostData(route.path, route.query?.sort).then((data) => {
    if (!data.length) {
      isEmpty.value = true
      return
    }
    artlistData.value = data
    isEmpty.value = false
    isLoading.value = false
  })
}, { deep: true })
const bottomHandler = useThrottle(addArtListItem)
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
    <!-- <ArticlesListItemAd /> -->
    <ArticlesListUiSkeleton v-if="isLoading || isEmpty" />
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
