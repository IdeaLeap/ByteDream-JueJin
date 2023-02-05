<script setup lang="ts">
import type { PropType } from 'vue'
import type { IGlobal } from '~~/types/IGlobal'
const props = defineProps({
  globalData: {
    type: Object as PropType<IGlobal>,
    required: true,
  },
})
</script>

<template>
  <div class="index-aside">
    <AsideSign class="mb-5" />
    <AsideAdvertisements :ads="globalData.ads" />
    <AsideGadgets class="mb-5" :gadgets="globalData.gadgets" />
    <AsideAuthorList class="sidebar-block mb-5" />
    <AsideLinkList class="mb-5" :links="globalData.links" />
    <!-- <AsideArticleList class="sidebar-block mb-5" /> -->
    <AsideFooters class="mb-5" :footers="globalData.footers" />
    <AsideSuspensionPanel class="fixed right-3 bottom-1" />
  </div>
</template>

<style scoped>
.sidebar-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}

.index-aside {
  width: 20rem;
}
</style>
