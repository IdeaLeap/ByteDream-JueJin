<script setup lang="ts">
const route = useRoute()
const isShow = useState('isShow', () => false)
const artlistPath = useArtlistPath()
const routeMap = {
  three_days_hottest: '3天内',
  weekly_hottest: '7天内',
  monthly_hottest: '30天内',
  hottest: '全部',
}
</script>

<template>
  <div v-if="route.query.sort && route.query.sort?.indexOf('hottest') !== -1" class="dorp-down-area">
    <div class="drop-down">
      <div class="dropdown-toggle" @click="isShow = !isShow">
        {{ routeMap[route.query.sort as string] }}
        <div class="icon" i-carbon:caret-up :class="!isShow ? 'toggled' : ''" />
      </div>
      <ul v-if="isShow" class="dropdown-menu">
        <li v-for="(item, key) in routeMap" :key="item">
          <NuxtLink :to="`${artlistPath}?sort=${key}`" @click="isShow = false">
            {{ item }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dorp-down-area {
  @apply z-9 relative
}
.dorp-down-area .drop-down {
  @apply absolute top-1/2 left-0 text-jj-gray-drop-normal min-w-[4rem] -translate-y-1/2
}
li {
  @apply dark:bg-jj_bg_gray
}
.dropdown-toggle {
  @apply flex items-center justify-between box-border min-w-[7rem] text-[1rem] rounded-[2px] px-[10px] py-[2px] border border-solid border-jj-border-dropdown-normal
}
.dropdown-toggle:hover {
  @apply bg-jj-dropdown-normal cursor-pointer
  @apply dark:hover-bg-jj-black-dropdown-normal
}
.icon {
  @apply text-[#b2bac2] transition-all
}
.dropdown-menu {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  @apply text-left bg-white border border-[#ebebeb] absolute box-border top-[105%] left-0 z-1000 min-w-[7rem] text-[1rem] rounded-[0.17rem]
  @apply dark:b-jj-gray-container-normal
}
.dropdown-menu li {
  @apply overflow-hidden w-full
}
.dropdown-menu li a {
  @apply block p-[0.83rem] text-jj-gray-drop-normal clear-both line-[1.7]
}
.toggled {
  @apply rotate-180
}
.dropdown-menu li a:hover {
  @apply bg-jj-dropdown-normal
  @apply dark:hover-bg-jj-black-dropdown-normal
}
</style>
