<script setup lang="ts">
const queryMap = {
  推荐: '',
  最新: 'newest',
  热榜: 'three_days_hottest',
}
</script>

<template>
  <div class="links">
    <NuxtLink
      v-for="(item, key, index) in queryMap"
      :key="key"
      :to="item ? `?sort=${item}` : '?'"
      :class="`
        ${$route.query.sort === item ? 'h_t' : ''}
        ${index ? 'b-l-1' : ''}
        ${(!index && !$route.query.sort) ? 'h_t' : ''}
        t
        `"
    >
      {{ key }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.links {
  @apply all-px-5 all-my-4 flex
}
.t {
  @apply text-jj-gray-normal
  @apply hover:text-link dark:border-[#888]
}
.h_t {
  @apply text-link
}
</style>
