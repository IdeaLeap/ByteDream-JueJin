<!-- eslint-disable no-console -->
<script setup lang="ts">
const route = useRoute()
let pagenum = 0
const isLoading = useState('isLoading', () => false)
const artlistData = useArtlist(await useFetchPostData())
console.log('0', artlistData.value)
const addArtListItem = () => {
  if (useScrollBottom()) {
    const timer = setTimeout(async () => {
      if (useScrollBottom()) {
        pagenum++
        const type = route.path.replace('/', '')
        const sort = route.query?.sort as string | undefined
        const newArtlistData = await useFetchPostData(type, sort, pagenum)
        console.log('new', newArtlistData)
        artlistData.value.push(...newArtlistData)
      }
      clearTimeout(timer)
    }, 1000)
  }
}
watch(route, (newRoute) => {
  const type = newRoute.path.replace('/', '')
  const sort = newRoute.query?.sort as string | undefined
  isLoading.value = true
  useFetchPostData(type, sort).then((data) => {
    artlistData.value = data
    isLoading.value = false
  })
}, { immediate: false, deep: true })
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
    <div class="flex" style="font-size: 13.67px;" border-b-1>
      <ArticlesLink />
      <UnoSelect />
    </div>
    <ul v-if="!isLoading">
      <ArticlesItem
        v-for="items in artlistData" :key="items.id" :name="items.name" :duration="items.duration"
        :title="items.title" :summary="items.summary" :tags="items.tagIds" :topic-heat="items.topicHeat"
        :cover="items.cover"
      />
    </ul>
    <ArticlesSkeleton v-else />
  </div>
</template>
