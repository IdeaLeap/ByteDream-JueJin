<template>
  <div class="root_class">
    <Suspense>
      <Main />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.root_class {
  @apply bg-[#f4f5f5]
  @apply dark:bg-dark_bg
}
</style>
