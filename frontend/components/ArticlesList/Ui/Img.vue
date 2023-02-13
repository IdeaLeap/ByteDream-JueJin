<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  avatar: boolean
}>()
</script>

<template>
  <div :class="`${avatar ? '' : 'ml-[1.67rem] mb-[-1.85rem]'} overflow-hiden`">
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
  </div>
</template>

<style scoped>
.cover {
  @apply object-cover w-[120px] h-[80px]
}
.avatar {
  @apply w-16 h-16 rounded-full
}
</style>
