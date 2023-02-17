<script setup lang="ts">
defineProps<{ to: String }>()
</script>

<template>
  <NuxtLink :to="to" class="link_container" target="_blank">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.link_container {
  @apply transition flex-1 f-c-c transition-all all-cursor-pointer px-[1.67rem] pb-[10px] truncate
  @apply hover:bg-jj-hover
}
.link_container::after {
  background-color: rgba(185, 186, 190, .35);
  @apply absolute content-none bottom-0 h-[1px] left-[1.67rem] right-[1.67rem]
}
</style>
