<script setup>
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <main>
    <h1>这里是头部 {{ runtimeConfig.public.graphql_url }}</h1>
    <div>当前环境：{{ runtimeConfig.public.mode }}</div>
    <div class="block">
      <DarkToggle />
    </div>
  </main>
</template>

<style scoped>
div {
  display: block;
}
</style>
