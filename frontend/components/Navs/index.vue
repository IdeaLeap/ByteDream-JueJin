<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: NavList } = await useFetch('/api/global/navs')
const route = useRoute()
const activeNav = computed(() => {
  return NavList.value.find(item => item.url === route.path) || NavList.value[0]
})
const [isMobileNavShown, toggleMobileNavShown] = useToggle()
const isNavShown = inject('isNavShown')
</script>

<template>
  <div class="main-header-wrapper">
    <header class="main-header flex items-center justify-between h-full" :class="{ 'nav-shown': isNavShown }">
      <nav class="nav-list h-full">
        <NuxtLink to="/" class="logo h-full">
          <Logo />
        </NuxtLink>
        <div class="nav-wrapper">
          <div class="mobile-nav" @click="toggleMobileNavShown()">
            <span class="mobile-nav-active">{{ activeNav?.nav }}</span>
            <div i-carbon:caret-up class="mobile-nav-icon" />
          </div>
          <div class="nav-item-wrapper" :class="{ 'mobile-nav-item-wrapper': isMobileNavShown }" @click="toggleMobileNavShown()">
            <NavsItem v-for="item in NavList" :key="item.nav" :nav="item" class="mx-4" :class="{ 'mobile-nav-item': isMobileNavShown }" />
          </div>
        </div>
      </nav>
      <UnoDarkToggle />
    </header>
  </div>
</template>

<style scoped>
.main-header.nav-shown{
    transform: translateZ(0);
    /* @apply -translate-y-5rem; */
}

.main-header {
    transform: translate3d(0,-100%,0);
    transition: all .2s;
    @apply flex items-center fixed top-0 left-0 right-0;
    @apply space-between md:justify-around;
    @apply bg-jj-sidebar border-b-1 h-[5rem] lt-sm:(h-[4.333rem]) z-99 border-jj-navs-normal;
}
.logo{
  @apply flex items-center mr-4 ml-6 w-auto inline-block;

}
.nav-list{
  @apply flex items-center;
}

.nav-item-wrapper{
  @apply hidden md:(flex h-full);
  @apply lt-md:(absolute top-4rem left-2rem p-2 h-auto border-1 border-jj-navs-wrapper-normal rounded-md shadow-xl shadow-black/10 dark:shadow-white/10 transform-gpu -translate-x-1/2 bg-jj-navs-background-normal);
}
.mobile-nav{
  @apply f-c-c md:hidden text-jj-blue-normal;
  cursor: pointer;
  /* color: #1e80ff; */
  font-size: 1.33rem;
  width: 5.66rem;
}

.mobile-nav-icon {
  /* color: #515767; */
  transform: rotate(180deg);
  transition: transform .2s ease-in-out;
  @apply text-jj-gray-text-normal
}

.mobile-nav-active{
  margin-right: .333rem;
}

.mobile-nav-item-wrapper {
  @apply lt-md:(block);

}

.mobile-nav-item{
  @apply lt-md:(px-13 h-4rem);
}

.nav-wrapper{
  @apply relative h-full flex items-center;
}
</style>
