<script setup lang="ts">
import type { IPanel } from '../../types/IPanel'
let pagenum = 0
const isLoading = useState('isLoading', () => false)
const artlistNav = useState('artlistNav', () => 'recommend')
const hotRange = useState('hotRange', () => 'all')
const hotRangeHandler = () => {
  // TODO: 热度选择天数范围
}
const initialItem = await useFetchPostData()
const artlistData = useState('artlist', () => [...initialItem] as IPanel[])
const addArtListItem = () => {
  if (useScrollBottom()) {
    const timer = setTimeout(async () => {
      if (useScrollBottom()) {
        pagenum++
        const newItem = await useFetchPostData()
        artlistData.value.push(...newItem)
      }
      clearTimeout(timer)
    }, 1000)
  }
}
const artModeHandler = (mode: string) => {
  artlistNav.value = mode
  const allEl = document.querySelectorAll('.navlist') as unknown as HTMLElement[]
  allEl.forEach((item) => {
    item.classList.remove('text-active')
  })
  const el = document.getElementById(mode) as unknown as HTMLElement
  if (el.style)
    el.classList.add('text-active')
  artlistData.value = []
  // TODO: 请求数据
  artlistData.value = initialItem
}
let EmployeeWindow
onMounted(() => {
  EmployeeWindow = window as any
  EmployeeWindow.addEventListener('scroll', addArtListItem)
})
onUnmounted(() => {
  EmployeeWindow = window as any
  EmployeeWindow.removeEventListener('scroll', addArtListItem) // 页面离开后销毁监听事件
})
</script>

<template>
  <div class="all-text-black pb-5 box-border w-full">
    <div class="flex" style="font-size: 13.67px;" border-b-1>
      <ul all-px-7 all-my-4 flex all-cursor-pointer all-text-gray-500>
        <li id="recommend" class=" text-blue-600 navlist border-r-1 hover:text-[#007fff]" @click="artModeHandler('recommend')">
          推荐
        </li>
        <li id="latest" class="navlist border-r-1 hover:text-[#007fff]" @click="artModeHandler('latest')">
          最新
        </li>
        <li id="hot" class="navlist hover:text-[#007fff]" @click="artModeHandler('hot')">
          热榜
        </li>
      </ul>
      <UnoSelect v-if="artlistNav === 'hot'" class="" />
    </div>
    <ul v-if="!isLoading && initialItem">
      <ArticlesItem
        v-for="items in artlistData" :key="items.uname" :uname="items.uname" :duration="items.duration"
        :title="items.title" :desc="items.desc" :tags="items.tags" :topic-heat="items.topicHeat"
      />
    </ul>
    <div v-else>
      <ArticlesSkeleton />
    </div>
  </div>
</template>

<style scoped>
#recommend {
  color: #007fff;
}
.text-active {
  @apply text-[#007fff]
}
</style>
