<script setup lang="ts">
const artlistPath = useArtlistPath()
</script>

<template>
  <div class="all-px-5 all-my-4 flex all-cursor-pointer">
    <NuxtLink
      :to="`${artlistPath === '' ? '/' : artlistPath}`"
      :class="`${
        $route.query.sort ? 'text-gray-500' : 'text-link'
      } border-r-1 text_style pl-0`"
    >
      推荐
    </NuxtLink>
    <NuxtLink
      :to="`${artlistPath}?sort=newest`"
      :class="`${
        $route.query.sort === 'newest' ? 'text-link' : 'text-gray-500'
      } border-r-1 text_style`"
    >
      最新
    </NuxtLink>
    <NuxtLink
      :to="`${artlistPath}?sort=three_days_hottest`"
      :class="`${
        ($route.query.sort && $route.query.sort?.indexOf('hottest') !== -1) ? 'text-link' : 'text-gray-500'
      } text_style`"
    >
      热榜
    </NuxtLink>
  </div>
</template>

<style scoped>
.text_style {
  @apply focus:text-link hover:text-link
}
</style>
