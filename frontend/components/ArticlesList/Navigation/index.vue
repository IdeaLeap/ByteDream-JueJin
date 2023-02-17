<template>
  <div class="navigator">
    <ArticlesListNavigationLink />
    <LazyArticlesListNavigationSelect v-if="$route.query.sort && $route.query.sort?.indexOf('hottest') !== -1" />
  </div>
</template>

<style scoped>
.navigator {
  border-bottom: 1px solid hsla(0,0%,59.2%,.1);
  @apply flex text-[1.17rem] pl-[0.42rem]
}
</style>
