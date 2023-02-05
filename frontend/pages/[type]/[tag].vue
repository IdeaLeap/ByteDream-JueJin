<script setup>
const route = useRoute()
</script>

<template>
  <div>
    tag
    {{ route.params.tag }}
  </div>
</template>

<style lang="scss" scoped>

</style>
