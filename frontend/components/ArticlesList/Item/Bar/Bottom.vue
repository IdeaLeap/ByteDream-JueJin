<script setup lang="ts">
defineProps<{
  viewed: number
  liked: number
  commented: number
}>()
const format = (num: number) => num > 10000 ? `${(num / 10000).toFixed(1)}w` : num
</script>

<template>
  <div class="bottombar">
    <div class="item">
      <div class="i-carbon-view" />
      <span class="heat">{{ viewed ? format(viewed) : '观看' }}</span>
    </div>
    <div class="item">
      <div class="i-carbon-thumbs-up" />
      <span class="heat">{{ liked ? format(liked) : '点赞' }}</span>
    </div>
    <div class="item">
      <div class="i-carbon-chat" />
      <span class="heat">{{ commented ? format(commented) : '评论' }}</span>
    </div>
  </div>
</template>

<style scoped>
.bottombar {
  @apply flex all-flex py-[1.25px] all-items-center
}
.heat {
  @apply pl-2
}
.item {
  @apply text-jj_sec_app text-[13px] transition pr-6
  @apply hover:text-primary
}
</style>
