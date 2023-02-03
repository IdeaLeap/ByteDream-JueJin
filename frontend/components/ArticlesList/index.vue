<script setup lang="ts">
const route = useRoute()
let pagenum = 0
const isLoading = useState('isLoading', () => false)
const isEmpty = useState('isEmpty', () => false)
const artlistData = useArtlist([])
const addArtListItem = () => {
  if (useScrollBottom()) {
    pagenum++
    useFetchPostData(route.path, route.query?.sort, pagenum).then((data) => {
      artlistData.value.push(...data)
    })
  }
}
watch(route, () => {
  pagenum = 0
  artlistData.value = []
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
}, { deep: true, immediate: true })
onMounted(() => {
  const EmployeeWindow = window as any
  EmployeeWindow.addEventListener('scroll', useThrottle(addArtListItem))
})
onUnmounted(() => {
  const EmployeeWindow = window as any
  EmployeeWindow.removeEventListener('scroll', useThrottle(addArtListItem)) // 页面离开后销毁监听事件
})
</script>

<template>
  <div class="bg-white dark:bg-jj_bg_gray">
    <ArticlesListNavigation />
    <ArticlesListSkeleton v-if="isLoading && isEmpty" />
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
        :artlist-item="artlistData"
      />
    </ul>
  </div>
</template>
