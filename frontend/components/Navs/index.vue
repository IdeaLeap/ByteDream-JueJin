<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: NavList } = await useFetch('/api/global/navs')
</script>

<template>
  <main>
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>
    <h1>这里是头部 {{ runtimeConfig.public.graphql_url }}</h1>
    <div>当前环境：{{ runtimeConfig.public.mode }}</div>
    <div class="block">
      <DarkToggle />
    </div>
    {{ NavList }}
  </main>
</template>

<style scoped>
div {
  display: block;
}
</style>
