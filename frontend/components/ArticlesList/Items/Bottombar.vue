<script setup lang="ts">
defineProps({
  viewed: Number,
  liked: Number,
  commented: Number,
})
const format = (num: number) => {
  return num > 10000 ? `${(num / 10000).toFixed(1)}w` : num
}
</script>

<template>
  <div class="flex all-flex all-items-center all-text-jj_sec_app all-text-[13px]">
    <div>
      <div class="i-carbon-view" />
      <span class="pl-2">{{ viewed ? format(viewed) : '观看' }}</span>
    </div>
    <div class="mx-7">
      <div class="i-carbon-thumbs-up" />
      <span class="pl-2">{{ liked ? format(liked) : '点赞' }}</span>
    </div>
    <div>
      <div class="i-carbon-chat" />
      <span class="pl-2">{{ commented ? format(commented) : '评论' }}</span>
    </div>
  </div>
</template>

<style scoped></style>
