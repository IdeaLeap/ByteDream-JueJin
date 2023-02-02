<script setup lang="ts">
const route = useRoute()
const pagenum = usePagenum()
const isLoading = useState('isLoading', () => false)
const isEmpty = useState('isEmpty', () => false)
const artlistData = useArtlist([])
const addArtListItem = () => {
  if (useScrollBottom()) {
    pagenum.value++
    useFetchPostData(route.path, route.query?.sort, pagenum.value).then((data) => {
      artlistData.value.push(...data)
    })
  }
}
watchEffect(() => {
  if (!artlistData.value.length) {
    isLoading.value = true
    useFetchPostData(route.path, route.query?.sort).then((data) => {
      if (!data.length) {
        isEmpty.value = true
        return
      }
      artlistData.value = data
      isLoading.value = false
      isEmpty.value = false
    })
  }
}, { flush: 'post' })
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
  <div class="bg-white box-border">
    <ArticlesListNavigation />
    <ul v-if="!isLoading && !isEmpty">
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
    <ArticlesListSkeleton v-else />
  </div>
</template>
