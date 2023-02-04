<script setup lang="ts">
defineProps({
  title: String,
  summary: String,
})
</script>

<template>
  <div class="mainbar">
    <div class="title">
      {{ title }}
    </div>
    <div class="summary">
      {{ summary }}
    </div>
  </div>
</template>

<style scoped>
.mainbar {
  @apply py-4
}
.title {
  @apply truncate text-jj-font text-[16px] title font-semibold tracking-wide
}
.summary {
  @apply truncate pt-4 text-jj_thirdly text-[13px]
}
</style>
