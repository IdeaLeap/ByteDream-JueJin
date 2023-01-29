<script setup lang="ts">
const artlistPath = useArtlistPath()
</script>

<template>
  <div all-px-5 all-my-4 flex all-cursor-pointer>
    <NuxtLink
      :to="`${artlistPath === '' ? '/' : artlistPath}`"
      :class="`${
        $route.query.sort ? 'text-gray-500' : 'text-jj_link'
      } border-r-1 focus:text-jj_link hover:text-jj_link`"
    >
      推荐
    </NuxtLink>
    <NuxtLink
      :to="`${artlistPath}?sort=newest`"
      :class="`${
        $route.query.sort === 'newest' ? 'text-jj_link' : 'text-gray-500'
      } border-r-1 focus:text-jj_link hover:text-jj_link`"
    >
      最新
    </NuxtLink>
    <NuxtLink
      :to="`${artlistPath}?sort=three_days_hottest`"
      :class="`${
        ($route.query.sort && $route.query.sort?.indexOf('hottest') !== -1) ? 'text-jj_link' : 'text-gray-500'
      } focus:text-jj_link hover:text-jj_link`"
    >
      热榜
    </NuxtLink>
  </div>
</template>
