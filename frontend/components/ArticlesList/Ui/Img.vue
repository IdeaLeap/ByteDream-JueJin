<script setup lang="ts">
defineProps({
  src: String,
  alt: String,
  avatar: Boolean,
})
</script>

<template>
  <nuxt-img
    v-if="src"
    :src="src"
    :alt="alt"
    loading="lazy"
    fit="cover"
    quality="80"
    format="webp"
    :class="`${avatar ? 'avatar' : 'cover'}`"
  />
</template>

<style scoped>
.cover {
  /* display: none; */
  @apply aspect-[3/2] ml-[1.67rem] mb-[-1.85rem] w-[120px]
}
.avatar {
  @apply w-16 h-16 rounded-full
}
</style>
