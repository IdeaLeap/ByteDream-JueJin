<script setup lang="ts">
defineProps<{
  title: string
  summary: string
  ad?: boolean
}>()
</script>

<template>
  <div :class="`${ad ? 'pt-3 mb-1' : 'py-4'}`">
    <div class="title">
      {{ title }}
    </div>
    <div class="summary">
      {{ summary }}
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply truncate text-jj-font-normal text-[16px] title font-semibold tracking-wide
}
.summary {
  @apply truncate pt-3 text-jj_thirdly text-[13px]
}
</style>
