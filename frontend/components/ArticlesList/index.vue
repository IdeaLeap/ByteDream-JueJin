<!-- eslint-disable no-console -->
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
  console.log('onMounted')
  const EmployeeWindow = window as any
  EmployeeWindow.addEventListener('scroll', bottomHandler)
})
onUnmounted(() => {
  console.log('onUnmounted')
  const EmployeeWindow = window as any
  EmployeeWindow.removeEventListener('scroll', bottomHandler)
})
</script>

<template>
  <div class="articlelist">
    <ArticlesListNavigation />
    <ArticlesListSkeleton v-if="isLoading || isEmpty" />
    <ul v-else>
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
        :name="item.authorId.name"
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
