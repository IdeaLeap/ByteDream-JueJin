<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: NavList } = await useFetch('/api/global/navs')
const route = useRoute()
const activeNav = computed(() => {
  return NavList.value.find(item => item.url === route.fullPath) || NavList[0]
})
</script>

<template>
  <div class="main-header-wrapper">
    <header class="main-header visible flex items-center justify-between h-full">
      <nav class="nav-list h-full">
        <NuxtLink to="/" class="logo h-full">
          <Logo />
        </NuxtLink>
        <div class="mobile-nav">
          {{ activeNav?.nav }}
          <div i-carbon:caret-up />
        </div>
        <NavsItem v-for="item in NavList" :key="item.nav" :nav="item" class="nav-item-wrapper h-full" />
      </nav>
      <UnoDarkToggle />
    </header>
  </div>
</template>

<style scoped>
.main-header.visible{
    transform: translateZ(0);
}

.main-header {
    transition: all .2s;
    transform: translate3d(0,-100%,0);
    @apply flex items-center fixed top-0 left-0 right-0 justify-around;
}
.main-header {
    @apply bg-jj_navigation border-b-1 border-[#f1f1f1] h-[5rem] z-99;
}

.logo{
  @apply flex items-center mr-4 ml-6 h-[2.2rem] w-auto inline-block;

}
.nav-list{
  @apply flex items-center;
}

.nav-item-wrapper{
  @apply mx-4;
}
.mobile-nav{
  display: none;
}
@screen md{
  .mobile-nav{
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #1e80ff;
    font-size: 1.33rem;
    justify-content: center;
  }
  .nav-item-wrapper{
    display:none;
  }
}
</style>
