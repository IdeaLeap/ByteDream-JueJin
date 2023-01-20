<script setup lang="ts">
interface ITitle {
  uname: string
  duration: string
  tags: string[]
  title: string
  desc: string
  topicHeat: [number, number, number]
}
const titleData: ITitle[] = [
  {
    uname: 'OrzR3',
    duration: '2月',
    tags: ['后端', 'Go', '前端'],
    title: 'Go 语言中的 Gin 框架',
    desc: 'Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交',
    topicHeat: [3182, 22, 6],
  },
  {
    uname: 'xj',
    duration: '2月',
    tags: ['Vue.js', 'arco design', 'koa'],
    title: '帮朋友搭建后台管理系统',
    desc: '对，还是那位朋友，一位接近40的澳洲老哥，找我帮忙搞一个管理后台，他刚找到编程',
    topicHeat: [15000, 276, 45],
  },
  {
    uname: 'sx',
    duration: '8天',
    tags: ['前端', '后端'],
    title: '如何打造一个优雅的git工作流',
    desc: '在开发中，不论是一个团队一起开发一个项目，还是自己独立开发一个项目。都少不了',
    topicHeat: [2022, 26, 6],
  },
]
</script>

<template>
  <div>
    <div>
      <div>
        这里是广告
      </div>
    </div>
    <ul class="all-text-dark">
      <li v-for="item in titleData" :key="item.uname" class="px-6 py-4 transition-all bg-white hover:bg-gray-50 b-b b-grey all-cursor-pointer">
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

