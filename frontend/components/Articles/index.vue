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
    item.style.color = '#6b7280'
  })
  const el = document.getElementById(mode) as unknown as HTMLElement
  if (el.style)
    el.style.color = 'deepskyblue'
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
        <li id="recommend" class="text-blue navlist border-r-1" @click="artModeHandler('recommend')">
          推荐
        </li>
        <li id="latest" class="navlist border-r-1" @click="artModeHandler('latest')">
          最新
        </li>
        <li id="hot" class="navlist" @click="artModeHandler('hot')">
          热榜
        </li>
      </ul>
      <!-- <select
        v-if="artlistNav === 'hot'" v-model="hotRange" class="text-2 px-2 border-1"
        @change="hotRangeHandler"
      >
        <option class="" :value="24 * 60 * 60 * 1000 * 3">
          3天内
        </option>
        <option class="" :value="24 * 60 * 60 * 1000 * 7">
          7天内
        </option>
        <option class="" :value="24 * 60 * 60 * 1000 * 30">
          30天内
        </option>
        <option value="all">
          全部
        </option>
      </select> -->
      <UnoSelect class="" />
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
a {
  transition: all .15s ease;
}
a:hover {
  color: deepskyblue!important;
}
</style>
