<script setup lang="ts">
import type { PropType } from 'vue'
import type { INavItem } from '~~/types/INav'
defineProps({
  nav: {
    type: Object as PropType<INavItem>,
    required: true,
  },
})
</script>

<template>
  <div>
    <NuxtLink v-if="nav.nav" :to="nav.url" class="nav-item" :data-badge="nav?.badge || ''">
      {{ nav.nav }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.nav-item {
  line-height: 1;
  @apply h-full flex items-center text-[15px] border-b-2 border-transparent;
  @apply relative opacity-85 whitespace-nowrap;
  @apply text-jj-navs-item-normal;

}
.nav-item:hover {
    @apply border-b-primary;
    @apply opacity-100;
}
.nav-item::after {
  @apply absolute left-2/3 top-[0.3rem] md:(top-[0.8rem]);
  @apply bg-jj-navs-after-normal text-jj-light;
  @apply rounded-full px-1.5 py-0.5 whitespace-nowrap;
  @apply transform-gpu scale-60 origin-top-left;
  content: attr(data-badge);
}
.nav-item[data-badge='']::after {
  content: unset;
}
.nav-item.router-link-exact-active {
    @apply opacity-100 text-primary;
}
</style>
