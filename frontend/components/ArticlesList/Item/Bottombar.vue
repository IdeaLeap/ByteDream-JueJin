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
  <div class="bottombar">
    <div>
      <div class="i-carbon-view" />
      <span class="heat">{{ viewed ? format(viewed) : '观看' }}</span>
    </div>
    <div class="mid">
      <div class="i-carbon-thumbs-up" />
      <span class="heat">{{ liked ? format(liked) : '点赞' }}</span>
    </div>
    <div>
      <div class="i-carbon-chat" />
      <span class="heat">{{ commented ? format(commented) : '评论' }}</span>
    </div>
  </div>
</template>

<style scoped>
.bottombar {
  @apply flex all-flex all-items-center all-text-jj_sec_app all-text-[13px]
}
.mid {
  @apply mx-7
}
.heat {
  @apply pl-2
}
</style>
