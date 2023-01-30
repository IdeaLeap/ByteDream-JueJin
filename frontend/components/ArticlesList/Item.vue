<script setup lang="ts">
import type { IArticleItem } from '~~/types/IArticleItem'
defineProps({
  artlistItem: {
    type: Array<IArticleItem>,
  },
})
const format = (num: number) => {
  return num > 10000 ? `${(num / 10000).toFixed(1)}w` : num
}
</script>

<template>
  <li v-for="artItem in artlistItem" :key="artItem.id" class="f-c-c py-4 transition-all bg-white hover:bg-[#FAFAFA] b-b b-grey all-cursor-pointer">
    <NuxtLink class="flex-1 pl-[1.67rem] truncate" :to="`/article/${artItem.id}`">
      <div class="flex items-center pr-4 text-[13px]">
        <span class="text-jj_sec-app px-3 border-r-1 pl-0">{{ artItem.authorId.name }}</span>
        <span class="text-jj_thirdly px-3 border-r-1">{{ formatTime(artItem.createdAt) }}</span>
        <div class="flex px-3">
          <div v-for="(item, index) of artItem.tagIds.data" :key="item.tag" class="items-center flex">
            <span class="px-0 text-jj_thirdly">{{ item.tag }}</span>
            <div v-if="index !== artItem.tagIds.data.length - 1" class="i-carbon-circle-solid px-2 text-[0.15rem]" />
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="truncate text-jj_primary text-[16px] title font-semibold tracking-wide">
          {{ artItem.title }}
        </div>
        <div class="truncate pt-4 text-jj_thirdly text-[13px]">
          {{ artItem.summary }}
        </div>
      </div>
      <div class="flex all-flex all-items-center all-text-jj_sec_app all-text-[13px]">
        <div>
          <div class="i-carbon-view" />
          <span class="pl-2">{{ artItem.viewed ? format(artItem.viewed) : '观看' }}</span>
        </div>
        <div class="mx-7">
          <div class="i-carbon-thumbs-up" />
          <span class="pl-2">{{ artItem.liked[1] ? format(artItem.liked) : '点赞' }}</span>
        </div>
        <div>
          <div class="i-carbon-chat" />
          <span class="pl-2">{{ artItem.commented[2] ? format(artItem.commented) : '评论' }}</span>
        </div>
      </div>
    </NuxtLink>
    <div class="px-[1.67rem]">
      <nuxt-img
        v-if="artItem.cover"
        :src="artItem.cover"
        :alt="artItem.summary"
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
  color: #909090;
}
</style>
