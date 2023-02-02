<script setup lang="ts">
defineProps({
  cover: String,
  summary: String,
})
</script>

<template>
  <nuxt-img
    v-if="cover"
    :src="cover"
    :alt="summary"
    loading="lazy"
    fit="fill"
    quality="80"
    format="webp"
    class="mx-[1.67rem] mb-[-2rem] w-[120px] h-[80px]"
  />
</template>

<style scoped></style>
