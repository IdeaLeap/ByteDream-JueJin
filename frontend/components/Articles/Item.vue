<script setup lang="ts">
const props = defineProps({
  name: String,
  duration: String,
  title: String,
  summary: String,
  tags: {
    type: Array,
    default: (): string[] => [],
  },
  topicHeat: {
    type: Array,
    default: (): number[] => [0, 0, 0],
  },
  postID: String,
  cover: String,
})
const enteredtopicHeat: (string | number)[] = props.topicHeat.map((item) => {
  const value = item as number
  return value > 10000 ? `${(value / 10000).toFixed(1)}w` : value
})
</script>

<template>
  <li class="focus:text-slate-500 flex justify-between items-center py-4 transition-all bg-white hover:bg-gray-50 b-b b-grey all-cursor-pointer">
    <NuxtLink class="flex-auto pl-5 truncate" :to="`/${name}`" style="flex: 1">
      <div class="flex items-center all-px-4 pr-4" style="font-size: 13px;">
        <span class="border-r-1 pl-0">{{ name }}</span>
        <span class="text-gray-500 border-r-1">{{ duration }}前</span>
        <div class="flex">
          <div v-for="(tag, index) in tags" :key="index" class="al-px-0 px-0 text-gray-500 items-center flex">
            <span class="px-0 text-gray-500">{{ tag }}</span>
            <div v-if="index !== tags.length - 1" style="font-size: 0.15rem;" class="i-carbon-circle-solid px-2" />
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="truncate title font-semibold tracking-wide" style="font-size: 16px;">
          {{ title }}
        </div>
        <div class="truncate pt-4 text-slate-500" style="font-size: 13px;">
          {{ summary }}
        </div>
      </div>
      <div class="flex all-flex all-items-center all-text-slate-700" style="font-size: 13px;">
        <div>
          <div class="i-carbon-view" />
          <span class="pl-2">{{ enteredtopicHeat[0] ? enteredtopicHeat[0] : '观看' }}</span>
        </div>
        <div class="mx-7">
          <div class="i-carbon-thumbs-up" />
          <span class="pl-2">{{ enteredtopicHeat[1] ? enteredtopicHeat[1] : '点赞' }}</span>
        </div>
        <div>
          <div class="i-carbon-chat" />
          <span class="pl-2">{{ enteredtopicHeat[2] ? enteredtopicHeat[2] : '评论' }}</span>
        </div>
      </div>
    </NuxtLink>
    <div class="px-4">
      <nuxt-img
        :src="cover"
        :alt="summary"
        width="120"
        height="80"
        loading="lazy"
        fit="cover"
        quality="80"
        format="webp"
      />
    </div>
  </li>
</template>

<style scoped>
a:visited .title {
  color: gray;
}
</style>
