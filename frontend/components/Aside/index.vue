<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
const { data: GlobalData } = await useFetch('/api/global')
const { y } = useWindowScroll()
const isNavShown = inject('isNavShown')
</script>

<template>
  <div class="index-aside">
    <AsideSign class="mb-5" />
    <AsideAdvertisements :ads="GlobalData.ads" />
    <AsideGadgets class="mb-5" :gadgets="GlobalData.gadgets" />
    <AsideAuthorList class="sidebar-block mb-5" />
    <AsideLinkList class="mb-5" :links="GlobalData.links" />
    <!-- <AsideArticleList class="sidebar-block mb-5" /> -->
    <AsideFooters class="mb-5" :footers="GlobalData.footers" />
    <AsideSuspensionPanel class="fixed right-3 bottom-1" />
    <transition>
      <div v-show="y > 1370" class="hover-ads" :class="{ 'ads-nav-shown': isNavShown }">
        <AsideAdvertisements :ads="GlobalData.ads" />
        <AsideGadgets class="mb-5" :gadgets="GlobalData.gadgets" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.sidebar-block {
  /* background-color: #fff; */
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  /* color: #333; */
  @apply bg-jj-light text-jj-gray-container-normal
}

.index-aside {
  width: 20rem;
}

.hover-ads {
  @apply fixed top-20 w-20rem transition-all duration-200
}

.v-enter-active {
  transition: opacity 0.2s ease-in-out ;
}
.v-leave-active {
  transform: translateY(-5rem);
  transition: opacity 0.2s ease-in-out ;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.ads-nav-shown {
  @apply top-40 transition-all duration-200
}
</style>
