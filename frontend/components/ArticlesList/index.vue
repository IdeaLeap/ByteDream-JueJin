<script setup lang="ts">
const route = useRoute()
const routeData = usePath(route)
let pageNum = 1
const isLoading = useState('isLoading', () => false)
const isEmpty = useState('isEmpty', () => false)
const artlistData = ref(await useFetchPostData(routeData.type as string, route.query?.sort, pageNum, routeData.tag as string))
const addArtListItem = () => {
  if (useScrollBottom()) {
    pageNum++
    useFetchPostData(routeData.type as string, route.query?.sort, pageNum, routeData.tag as string).then((data) => {
      artlistData.value.push(...data)
    })
  }
}
const { data: articleAds } = await useFetch('/api/global/ad')
watch(() => route, () => {
  pageNum = 1
  isLoading.value = true
  const route = useRoute()
  const routeData = usePath(route)
  useFetchPostData(routeData.type as string, route.query?.sort, pageNum, routeData.tag as string).then((data) => {
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
    <ArticlesListUiSkeleton v-if="isLoading || isEmpty || artlistData.length === 0" />
    <ul v-else>
      <ArticlesListItemAds
        :title="articleAds?.title"
        :author="articleAds?.author"
        :summary="articleAds?.summary"
        :cover="articleAds?.cover"
        :url="articleAds?.url"
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
