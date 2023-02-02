<script setup>
const { data: GlobalData } = await useFetch('/api/global')
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
