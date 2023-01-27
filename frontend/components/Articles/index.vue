<script setup lang="ts">
const route = useRoute()
let pagenum = 0
const isLoading = useState('isLoading', () => false)
const artlistData = useArtlist(await useFetchPostData())
const addArtListItem = () => {
  if (useScrollBottom()) {
    const timer = setTimeout(async () => {
      if (useScrollBottom()) {
        pagenum++
        const type = route.path.replace('/', '')
        const sort = route.query?.sort as string | undefined
        const newArtlistData = await useFetchPostData(type, sort, pagenum)
        artlistData.value.push(...newArtlistData)
      }
      clearTimeout(timer)
    }, 1000)
  }
}
watchEffect(() => {
  const type = route.path.replace('/', '')
  const sort = route.query?.sort as string | undefined
  isLoading.value = true
  useFetchPostData(type, sort).then((data) => {
    artlistData.value = data
    isLoading.value = false
  })
}, { flush: 'post' })
onMounted(() => {
  const EmployeeWindow = window as any
  EmployeeWindow.addEventListener('scroll', addArtListItem)
})
onUnmounted(() => {
  const EmployeeWindow = window as any
  EmployeeWindow.removeEventListener('scroll', addArtListItem) // 页面离开后销毁监听事件
})
</script>

<template>
  <div class="pb-5 box-border w-full">
    <ArticlesNavigation />
    <ul v-if="!isLoading">
      <ArticlesItem
        v-for="item in artlistData" :key="item.id" :name="item.name" :duration="item.duration"
        :title="item.title" :summary="item.summary" :tags="item.tagIds" :topic-heat="item.topicHeat"
        :cover="item.cover"
      />
    </ul>
    <ArticlesSkeleton v-else />
  </div>
</template>
