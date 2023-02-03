<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: typeList } = await useFetch('/api/global/types')
const isNavShown = inject('isNavShown')
</script>

<template>
  <div class="view-types" :class="{ 'nav-shown': !isNavShown }">
    <div class="flex list-none ma pr-114">
      <li v-for="item in typeList" :key="item.type" class="type-list">
        {{ item.alias }}
      </li>
    </div>
  </div>
</template>

<style scoped>
.nav-shown{
  @apply -translate-y-5rem;
}
.view-types {
  background: #fff;
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 1;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all .2s;
  display: flex;
}
.type-list{
  @apply mr-8 text-lg text-gray-700 h-5 w-auto float-left cursor-pointer whitespace-nowrap;
}
.type-list:hover{
  color: #1e80ff;
}
</style>
