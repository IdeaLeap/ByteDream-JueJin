<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: TypeList } = await useFetch('/api/global/types')
</script>

<template>
  <div class="view-nav">
    <div class="flex list-none ma pr-114">
      <li v-for="item in TypeList" :key="item.type" class="mr-8 text-lg text-gray-700 h-5 w-10 float-left cursor-pointer">
        {{ item.type }}
      </li>
    </div>
  </div>
</template>

<style scoped>
.view-nav {
  background: #fff;
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
</style>
