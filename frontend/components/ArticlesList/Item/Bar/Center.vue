<script setup lang="ts">
defineProps<{
  title: string
  summary: string
  ad?: boolean
}>()
</script>

<template>
  <div :class="`${ad ? 'mb-1' : ''}`" class="my-[10px]">
    <div class="title">
      {{ title }}
    </div>
    <div :class="`${ad ? 'whitespace-pre-wrap' : 'truncate'}`" class="summary">
      {{ summary }}
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply truncate text-jj-font-normal text-[16px] title font-semibold tracking-wide
}
.summary {
  @apply mt-[8px] text-jj_thirdly text-[13px] leading-[22px]
}
</style>
