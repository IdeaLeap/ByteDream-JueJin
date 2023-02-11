<script setup lang="ts">
defineProps({
  to: String,
})
</script>

<template>
  <NuxtLink :to="to" class="link_container" target="_blank">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.link_container {
  @apply transition flex-1 f-c-c transition-all b-b b-grey all-cursor-pointer px-[1.67rem] pt-[1.25rem] pb-[0.85rem] truncate
  @apply dark:b-jj-gray-container-normal hover:bg-jj-hover
}
</style>
