<script setup>

</script>

<template>
  <div class="root_class">
    <Suspense>
      <Main pb-8rem />
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
  @apply bg-jj-main;
}
</style>
