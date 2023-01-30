<script setup lang="ts">
const route = useRoute()
let pagenum = 1
const isLoading = useState('isLoading', () => false)
const artlistData = useArtlist([])
const addArtListItem = () => {
  if (useScrollBottom()) {
    pagenum++
    useFetchPostData(route.path, route.query?.sort, pagenum).then((data) => {
      artlistData.value.push(...data)
    })
  }
}

watchEffect(() => {
  pagenum = 1
  if (!artlistData.value.length) {
    isLoading.value = true
    useFetchPostData(route.path, route.query?.sort).then((data) => {
      if (!data.length)
        return
      artlistData.value = data
      isLoading.value = false
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
  <div class="pb-5 box-border w-full">
    <ArticlesNavigation />
    <ul v-if="!isLoading">
      <ArticlesItem :artlist-item="artlistData" />
    </ul>
    <ArticlesSkeleton v-else />
  </div>
</template>
