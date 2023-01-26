<script setup lang="ts">
const artlistPath = useArtlistPath()
</script>

<template>
  <div all-px-7 all-my-4 flex all-cursor-pointer>
    <NuxtLink
      :to="`${artlistPath === '' ? '/' : artlistPath}`"
      :class="`${
        $route.query.sort ? 'text-gray-500' : 'text-[#007fff]'
      } border-r-1 focus:text-[#007fff] hover:text-[#007fff]`"
    >
      推荐
    </NuxtLink>
    <NuxtLink
      :to="`${artlistPath}?sort=newest`"
      :class="`${
        $route.query.sort === 'newest' ? 'text-[#007fff]' : 'text-gray-500'
      } border-r-1 focus:text-[#007fff] hover:text-[#007fff]`"
    >
      最新
    </NuxtLink>
    <NuxtLink
      :to="`${artlistPath}?sort=three_days_hottest`"
      :class="`${
        ($route.query.sort && $route.query.sort?.indexOf('hottest') !== -1) ? 'text-[#007fff]' : 'text-gray-500'
      } border-r-1 focus:text-[#007fff] hover:text-[#007fff]`"
    >
      热榜
    </NuxtLink>
  </div>
</template>
