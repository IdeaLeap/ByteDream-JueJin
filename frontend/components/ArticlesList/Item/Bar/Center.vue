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
  @apply py-3
}
.title {
  @apply truncate text-jj-font-normal text-[16px] title font-semibold tracking-wide
}
.summary {
  @apply truncate pt-3 text-jj_thirdly text-[13px]
}
</style>
