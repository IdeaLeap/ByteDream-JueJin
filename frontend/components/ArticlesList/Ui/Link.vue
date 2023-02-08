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
  @apply transition hover:bg-jj-hover f-c-c py-4 transition-all b-b b-grey all-cursor-pointer flex-1 px-[1.67rem] truncate
  @apply dark:b-jj-gray-container-normal
}
</style>
