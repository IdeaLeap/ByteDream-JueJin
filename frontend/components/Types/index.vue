<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: typeList } = await useFetch('/api/global/types')
const isNavShown = inject('isNavShown')
</script>

<template>
  <div class="view-types" :class="{ 'nav-shown': !isNavShown }">
    <div class="type-list">
      <NuxtLink class="type-list-item" to="/">
        综合
      </NuxtLink>
      <NuxtLink v-for="item in typeList" :key="item.type" class="type-list-item" :to="`/${item.type}`">
        {{ item.alias }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.nav-shown{
  transform: translate3d(0,-5rem,0) !important;
}
@media (max-width: 640px) {
  .nav-shown{
  transform: translate3d(0,-4.333rem,0) !important;
  }
}
@media (max-width: 960px){
  .type-list-item:first-child {
      @apply pl-[1.5rem];
  }
  .type-list-item:last-child {
      @apply pr-[1.5rem];
  }
}
.view-types {
  transition: all .2s;
  transform: translateZ(0);
  @apply bg-jj_navigation w-full fixed top-[5rem] lt-sm:(top-[4.333rem]) shadow-sm shadow-black/5 dark:shadow-white/5 h-[3.833rem] z-1;
}
.type-list-item{
  @apply h-full w-auto float-left cursor-pointer whitespace-nowrap flex items-center p-x-[1rem] color-[#71777c] text-[1.16rem];
  @apply cursor-pointer;
}
.type-list-item:hover{
  color: #1e80ff;
}

.type-list{
  line-height: 1;
  @apply list-none ma max-w-[60rem] h-full;
  @apply overflow-x-auto flex items-center;
}

.type-list::-webkit-scrollbar {
        height: 0;
}

.type-list-item.router-link-exact-active {
    @apply opacity-100 text-primary;
}
</style>
