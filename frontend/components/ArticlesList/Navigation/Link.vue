<template>
  <div class="flex">
    <NuxtLink
      to="?"
      :class="`${!$route.query?.sort ? 'ht' : ''}`"
    >
      推荐
    </NuxtLink>
    <NuxtLink
      to="?sort=newest"
      :class="`${$route.query.sort === 'newest' ? 'ht' : ''} mid`"
    >
      最新
    </NuxtLink>
    <NuxtLink
      to="?sort=three_days_hottest"
      :class="`${JSON.stringify($route.query).indexOf('hottest') !== -1 ? 'ht' : ''} last`"
    >
      热榜
    </NuxtLink>
  </div>
</template>

<style scoped>
a {
  @apply relative my-4 px-[1.25rem] text-jj-gray-normal
  @apply hover:text-link dark:border-[#888]
}
.mid::before, .last::before {
  @apply content-none absolute top-1/2 left-0 -translate-y-1/2 display-block w-[1px] h-[12px] bg-[#e5e6eb]
}
.ht {
  @apply text-link
}
</style>
