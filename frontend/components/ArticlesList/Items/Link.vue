<script lang="ts" setup>
defineProps({
  id: String,
  url: String,
})
</script>

<template>
  <NuxtLink v-if="id" class="flex-1 pl-[1.67rem] truncate" :to="`/article/${id}`">
    <slot />
  </NuxtLink>
  <NuxtLink v-if="url" class="flex-1 pl-[1.67rem] truncate" :to="`/article/${url}`">
    <slot />
  </NuxtLink>
</template>

<style scoped>
  a:visited {
    color: #909090;
  }
</style>
