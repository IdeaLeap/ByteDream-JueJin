<script setup lang="ts">
const route = useRoute()
let pagenum = 0
const isLoading = useState('isLoading', () => false)
const artlistData = useArtlist(await useFetchPostData())
const addArtListItem = () => {
  if (useScrollBottom()) {
    pagenum++
    useFetchPostData(route.path, route.query?.sort, pagenum).then((data) => {
      artlistData.value.push(...data)
    })
  }
}
watchEffect(() => {
  isLoading.value = true
  useFetchPostData(route.path, route.query?.sort).then((data) => {
    artlistData.value = data
    isLoading.value = false
  })
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
  <div class="pb-5 box-border w-full">
    <ArticlesNavigation />
    <ul v-if="!isLoading">
      <ArticlesItem
        v-for="item in artlistData" :id="item.id" :key="item.id" :author-id="item.authorId"
        :created-at="item.createdAt" :title="item.title" :summary="item.summary"
        :viewed="item.viewed" :liked="item.liked" :commented="item.commented" :cover="item.cover"
        :tag-ids="item.tagIds"
      />
    </ul>
    <ArticlesSkeleton v-else />
  </div>
</template>
