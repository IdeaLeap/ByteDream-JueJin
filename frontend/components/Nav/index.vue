<script setup>
const NavList = reactive([{
  name: '首页',
  path: '/',
},
{
  name: '关于',
  path: '/about',
}])
</script>

<template>
  <div class="view-nav">
    <div class="nav-list">
      <li v-for="item in NavList" :key="item.path">
        <NuxtLink :to="item.path">
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
