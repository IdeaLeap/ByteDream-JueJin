<script setup lang="ts">
const props = defineProps({
  uname: String,
  duration: String,
  title: String,
  desc: String,
  tags: {
    type: Array,
    default: () => [],
  },
  topicHeat: {
    type: Array,
    default: (): number[] => [0, 0, 0],
  },
  postID: String,
})
const enteredtopicHeat: (string | number)[] = props.topicHeat.map((item) => {
  const value = item as number
  return value > 10000 ? `${(value / 10000).toFixed(1)}w` : value
})
</script>

<template>
  <li class="focus:text-slate-500 px-6 py-4 transition-all bg-white hover:bg-gray-50 b-b b-grey all-cursor-pointer">
    <NuxtLink :to="`/${uname}`">
      <div class="flex items-center all-px-3" style="font-size: 1.2rem;">
        <span class="text-5 border-r-1 pl-0">{{ uname }}</span>
        <span class="text-gray-500 border-r-1">{{ duration }}前</span>
        <div class="flex">
          <div v-for="(tag, index) in tags" :key="index" class="al-px-0 px-0 text-gray-500 items-center flex">
            <span class="px-0 text-gray-500">{{ tag }}</span>
            <div v-if="index !== tags.length - 1" style="font-size: 0.15rem;" class="i-carbon-circle-solid px-2" />
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="title font-semibold tracking-wide" style="font-size: 1.55rem;">
          {{ title }}
        </div>
        <div class="pt-4 text-slate-500 truncate" style="font-size: 1.15rem;">
          {{ desc }}
        </div>
      </div>
      <div class="flex all-flex all-items-center all-text-slate-700" style="font-size: 1.25rem;">
        <div>
          <div class="i-carbon-view" />
          <span class="pl-2">{{ enteredtopicHeat[0] ? enteredtopicHeat[0] : '观看' }}</span>
        </div>
        <div class="mx-10">
          <div class="i-carbon-thumbs-up" />
          <span class="pl-2">{{ enteredtopicHeat[1] ? enteredtopicHeat[1] : '点赞' }}</span>
        </div>
        <div>
          <div class="i-carbon-chat" />
          <span class="pl-2">{{ enteredtopicHeat[2] ? enteredtopicHeat[2] : '评论' }}</span>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>

<style scoped>
a:visited .title {
  color: gray;
}
</style>
