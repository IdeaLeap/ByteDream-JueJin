<script setup lang="ts">
const route = useRoute()
watchEffect(() => {
  // TODO: 请求数据
})
let pagenum = 0
const isLoading = useState('isLoading', () => false)
const artlistData = useArtlist(await useFetchPostData())
const addArtListItem = () => {
  if (useScrollBottom()) {
    const timer = setTimeout(async () => {
      if (useScrollBottom()) {
        pagenum++
        const newArtlistData = await useFetchPostData()
        artlistData.value = newArtlistData
      }
      clearTimeout(timer)
    }, 1000)
  }
}
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
    <ul v-if="!isLoading && artlistData">
      <ArticlesItem
        v-for="items in artlistData" :key="items.uname" :uname="items.uname" :duration="items.duration"
        :title="items.title" :desc="items.desc" :tags="items.tags" :topic-heat="items.topicHeat"
      />
    </ul>
    <ArticlesSkeleton v-else />
  </div>
</template>
