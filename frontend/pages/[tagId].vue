<script setup lang="ts">
useArtlistPath(useRoute().path)
</script>

<template>
  <div>
    <Main :tag="$route.path" />
  </div>
</template>

<style scoped>

</style>
