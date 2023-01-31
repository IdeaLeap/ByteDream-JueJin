<script setup lang="ts">
defineProps({
  title: String,
  summary: String,
})
</script>

<template>
  <div class="py-4">
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
  @apply truncate text-jj_sec-app text-[16px] title font-semibold tracking-wide
}
.summary {
  @apply truncate pt-4 text-jj_thirdly text-[13px]
}
</style>
