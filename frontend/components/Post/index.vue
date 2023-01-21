<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { ITitle } from '~~/html'
const initialItem = await useFetchPostData()
const artlistData = useState('artlist', () => [...initialItem] as ITitle[])
const addArtListItem = () => {
  if (useScrollBottom()) {
    const timer = setTimeout(async () => {
      if (useScrollBottom()) {
        const newItem = await useFetchPostData()
        artlistData.value.push(...newItem)
      }
      clearTimeout(timer)
    }, 1000)
  }
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
  <div>
    <ul>
      <li
        v-for="item in artlistData" :key="item.uname"
        class="px-6 py-4 transition-all bg-white hover:bg-gray-50 b-b b-grey all-cursor-pointer"
      >
        <div class="flex items-center">
          <span class="text-4">{{ item.uname }}</span>
          <span class="px-4 text-gray-500">{{ item.duration }}前</span>
          <span v-for="tag in item.tags" :key="tag" class="mr-2 text-gray-500">{{ tag }}</span>
        </div>
        <div class="py-3">
          <div class="text-6 font-bold">
            {{ item.title }}
          </div>
          <div class="pt-2 text-1xl text-gray-500 truncate">
            {{ item.desc }}
          </div>
        </div>
        <div class="flex">
          <div><span>{{ item.topicHeat[0] }}</span></div>
          <div class="mx-3">
            <span>{{ item.topicHeat[1] }}</span>
          </div>
          <div><span>{{ item.topicHeat[2] }}</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

