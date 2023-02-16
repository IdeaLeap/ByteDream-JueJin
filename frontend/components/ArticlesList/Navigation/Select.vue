<script setup lang="ts">
const route = useRoute()
const isShow = useState('isShow', () => false)
const routeMap = {
  three_days_hottest: '3天内',
  weekly_hottest: '7天内',
  monthly_hottest: '30天内',
  hottest: '全部',
}
</script>

<template>
  <div class="z-9 relative">
    <div class="drop-down">
      <div class="dropdown-toggle" @click="isShow = !isShow">
        {{ routeMap[String(route.query.sort)] }}
        <div class="icon" :class="!isShow ? 'rotate-180' : ''" />
      </div>
      <ul v-if="isShow" class="dropdown-menu">
        <li v-for="(item, key) in routeMap" :key="item">
          <NuxtLink :to="`?sort=${key}`" @click="isShow = false">
            {{ item }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.drop-down {
  @apply absolute top-1/2 left-0 text-jj-gray-drop-normal min-w-[4rem] -translate-y-1/2
}
.dropdown-toggle {
  @apply flex items-center justify-between box-border min-w-[7rem] text-[1rem] rounded-[2px] px-[10px] py-[2px] border border-solid border-jj-border-dropdown-normal
  @apply hover:bg-jj-dropdown-normal cursor-pointer
  @apply dark:hover-bg-jj-black-dropdown-normal
}
.icon {
  @apply text-[#b2bac2] transition-all i-carbon:caret-up
}
.dropdown-menu {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  @apply text-left bg-white border border-[#ebebeb] absolute box-border top-[105%] left-0 z-1000 min-w-[7rem] text-[1rem] rounded-[0.17rem]
  @apply dark:(b-jj-gray-container-normal bg-jj_bg_gray)
}
.dropdown-menu li {
  @apply overflow-hidden w-full
}
.dropdown-menu li a {
  @apply block p-[0.83rem] text-jj-gray-drop-normal clear-both line-[1.7]
  @apply hover:bg-jj-dropdown-normal
  @apply dark:hover-bg-jj-black-dropdown-normal
}
</style>
