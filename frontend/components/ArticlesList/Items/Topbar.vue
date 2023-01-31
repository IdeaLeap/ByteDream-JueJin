<script setup lang="ts">
import type { ITagItem } from '~~/types/IArticleItem'
defineProps({
  name: String,
  duration: String,
  tags: {
    type: Array<ITagItem>,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center pr-4 text-[13px]">
    <span class="text-jj_sec-app px-3 border-r-1 pl-0">{{ name }}</span>
    <span class="text-jj_thirdly px-3 border-r-1">{{ duration }}</span>
    <div class="flex px-3">
      <div v-for="(item, index) of tags" :key="item.tag" class="items-center flex">
        <span class="px-0 text-jj_thirdly">{{ item.tag }}</span>
        <div v-if="index !== tags.length - 1" class="i-carbon-circle-solid px-2 text-[0.15rem]" />
      </div>
    </div>
  </div>
</template>
