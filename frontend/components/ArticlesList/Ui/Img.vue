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
    fit="fill"
    quality="80"
    format="webp"
    :class="`${avatar ? 'avatar' : 'cover'}`"
  />
</template>

<style scoped>
.cover {
  @apply mx-[1.67rem] mb-[-2rem] w-[120px] h-[80px]
}
.avatar {
  @apply w-17 h-17 rounded-full
}
</style>
