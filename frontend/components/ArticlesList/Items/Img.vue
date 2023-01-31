<script setup lang="ts">
defineProps({
  cover: String,
  summary: String,
})
</script>

<template>
  <div class="px-[1.67rem]">
    <nuxt-img
      v-if="cover"
      :src="cover"
      :alt="summary"
      width="120"
      height="80"
      loading="lazy"
      fit="cover"
      quality="80"
      format="webp"
    />
  </div>
</template>

<style scoped></style>
