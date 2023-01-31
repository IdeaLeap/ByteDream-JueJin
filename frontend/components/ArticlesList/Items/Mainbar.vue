<script setup lang="ts">
defineProps({
  title: String,
  summary: String,
})
</script>

<template>
  <div class="py-4">
    <div class="truncate text-jj_sec-app text-[16px] title font-semibold tracking-wide">
      {{ title }}
    </div>
    <div class="truncate pt-4 text-jj_thirdly text-[13px]">
      {{ summary }}
    </div>
  </div>
</template>
