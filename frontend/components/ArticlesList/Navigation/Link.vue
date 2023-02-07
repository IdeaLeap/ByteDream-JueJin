<template>
  <div class="link">
    <NuxtLink
      to="?"
      :class="`${
        $route.query.sort ? 'text-gray-500' : 'text-link'
      } br text_style pl-0`"
    >
      推荐
    </NuxtLink>
    <NuxtLink
      to="?sort=newest"
      :class="`${
        $route.query.sort === 'newest' ? 'text-link' : 'text-gray-500'
      } br text_style`"
    >
      最新
    </NuxtLink>
    <NuxtLink
      to="?sort=three_days_hottest"
      :class="`${
        ($route.query.sort && $route.query.sort?.indexOf('hottest') !== -1) ? 'text-link' : 'text-gray-500'
      } text_style`"
    >
      热榜
    </NuxtLink>
  </div>
</template>

<style scoped>
.link {
  @apply all-px-5 all-my-4 flex
}
.text_style {
  @apply focus:text-link hover:text-link
}
.br {
  @apply border-r-1
}
</style>
