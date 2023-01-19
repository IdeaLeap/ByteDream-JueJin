<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: NavList } = await useFetch(`${runtimeConfig.public.strapi_base_url}/api/navs`)
</script>

<template>
  <div class="view-nav">
    <div class="nav-list">
      <li v-for="item in NavList.data" :key="item.url">
        <NuxtLink :to="item.url">
          {{ item.name }}
        </NuxtLink>
      </li>
    </div>
  </div>
</template>

<style scoped>
.view-nav {
  background: red;
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all .2s;
  transform: translateZ(0);
  display: flex;
}

.view-nav .nav-list {
  position: relative;
  max-width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  line-height: 1;
}
</style>
