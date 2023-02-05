<script setup>
const route = useRoute()
</script>

<template>
  <div>
    type
    {{ route.params.type }}
  </div>
</template>

<style lang="scss" scoped>

</style>
