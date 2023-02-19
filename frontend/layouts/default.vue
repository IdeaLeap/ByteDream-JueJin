<template>
  <main class="">
    <Navs class="relative h-[5rem] lt-sm:(h-[4.333rem])" />
    <slot class="relative mx-0 my-a w-100% max-w-960" />
    <AsideSuspensionPanel class="fixed right-3 bottom-1 suspension-panel z-1000" />
  </main>
</template>

<style scoped>
@media (max-width: 960px) {
  .suspension-panel {
    display: none;
  }
}
</style>
