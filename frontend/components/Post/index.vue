<script setup>
const post_id = ref([
  { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 }, { id: 5 }, { id: 6 },
  { id: 7 }, { id: 8 }, { id: 9 },
  { id: 10 },
])
</script>

<template>
  <div>
    <div v-for="(post, index) in post_id" :key="index">
      <NuxtLink target="_blank" :to="`/post/${post.id}`" rel>
        这里是文章 Go
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.list {}
</style>
