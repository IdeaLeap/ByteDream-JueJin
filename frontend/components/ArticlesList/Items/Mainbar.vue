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
  color: text_jj_font_black;
  @apply truncate dark:text-jj_font_white text-[16px] title font-semibold tracking-wide
}
.summary {
  @apply truncate pt-4 text-jj_thirdly text-[13px]
}
</style>
