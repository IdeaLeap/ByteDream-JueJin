<script setup lang="ts">
interface IAuthor {
  name: string
}
interface ITagItem {
  tag: string
}
interface IArticleItem {
  id: string
  title: string
  viewed: number
  liked: number
  commented: number
  summary: string
  cover: string
  createdAt: string
  authorId: IAuthor
  tagIds: { data: ITagItem[] }
}
const {
  id,
  authorId,
  createdAt,
  title,
  summary,
  viewed,
  liked,
  commented,
  cover,
  tagIds,
} = defineProps<IArticleItem>()
const format = (num: number) => {
  return num > 10000 ? `${(num / 10000).toFixed(1)}w` : num
}
</script>

<template>
  <li class="flex justify-between items-center py-4 transition-all bg-white hover:bg-[#FAFAFA] b-b b-grey all-cursor-pointer">
    <NuxtLink class="flex-1 pl-5 truncate" :to="`/article/${id}`">
      <div class="flex items-center pr-4 text-[13px]">
        <span class="text-[#4E5968] px-3 border-r-1 pl-0">{{ authorId.name }}</span>
        <span class="text-[#86909c] px-3 border-r-1">{{ formatTime(createdAt) }}</span>
        <div class="flex px-3">
          <div v-for="(item, index) of tagIds.data" :key="item.tag" class="items-center flex">
            <span class="px-0 text-[#86909c]">{{ item.tag }}</span>
            <div v-if="index !== tagIds.data.length - 1" class="i-carbon-circle-solid px-2 text-[0.15rem]" />
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="truncate text-[#1d2129] text-[16px] title font-semibold tracking-wide">
          {{ title }}
        </div>
        <div class="truncate pt-4 text-[#86909c] text-[13px]">
          {{ summary }}
        </div>
      </div>
      <div class="flex all-flex all-items-center all-text-[#4e5969] all-text-[13px]">
        <div>
          <div class="i-carbon-view" />
          <span class="pl-2">{{ viewed ? format(viewed) : '观看' }}</span>
        </div>
        <div class="mx-7">
          <div class="i-carbon-thumbs-up" />
          <span class="pl-2">{{ liked[1] ? format(liked) : '点赞' }}</span>
        </div>
        <div>
          <div class="i-carbon-chat" />
          <span class="pl-2">{{ commented[2] ? format(commented) : '评论' }}</span>
        </div>
      </div>
    </NuxtLink>
    <div class="px-4">
      <nuxt-img
        v-if="cover"
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
  color: #909090;
}
</style>
