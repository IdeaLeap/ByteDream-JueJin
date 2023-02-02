<script setup lang="ts">
const route = useRoute()
const isShow = useState('isShow', () => false)
const iptValue = useState<string>('iptValue', () => '3天内')
const artlistPath = useArtlistPath()
const artlistData = useArtlist([])
const routeMap = {
  three_days_hottest: '3天内',
  weekly_hottest: '7天内',
  monthly_hottest: '30天内',
  hottest: '全部',
}
const iptValueHandler = (time: string) => {
  artlistData.value = []
  isShow.value = false
  iptValue.value = time
}
</script>

<template>
  <div v-if="route.query.sort && route.query.sort?.indexOf('hottest') !== -1" class="dorp-down-area">
    <div class="drop-down">
      <div class="dropdown-toggle flex items-center justify-between" @click="isShow = !isShow">
        {{ routeMap[route.query.sort as string] }}
        <div class="text-[#b2bac2]" i-carbon:caret-up :class="!isShow ? 'toggled' : ''" style="transition: all 0.5s" />
      </div>
      <ul v-if="isShow" class="dropdown-menu">
        <li>
          <NuxtLink :to="`${artlistPath}?sort=three_days_hottest`" @click="iptValueHandler('3天内')">
            3天内
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`${artlistPath}?sort=weekly_hottest`" aria-current="page" @click="iptValueHandler('7天内')">
            7天内
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`${artlistPath}?sort=monthly_hottest`" @click="iptValueHandler('30天内')">
            30天内
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`${artlistPath}?sort=hottest`" @click="iptValueHandler('全部')">
            全部
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
  @apply absolute top-1/2 left-0 text-[#909097] min-w-[4rem] -translate-y-1/2
}
li {
  @apply dark:bg-jj_bg_gray
}
.dropdown-toggle {
  @apply box-border min-w-[7rem] text-[1rem] rounded-[2px] px-[10px] py-[2px] border border-solid border-[#ebebeb]
}
.dropdown-toggle:hover {
  @apply bg-[#fafafb] dark:hover-bg-[#111] cursor-pointer
}
.dropdown-menu {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  @apply dark:b-[#333] text-left bg-white border border-[#ebebeb] absolute box-border top-[105%] left-0 z-1000 min-w-[7rem] text-[1rem] rounded-[0.17rem]
}
.dropdown-menu li {
  @apply overflow-hidden w-full
}
.dropdown-menu li a {
  @apply block p-[0.83rem] text-[#909097] clear-both line-[1.7]
}
.toggled {
  @apply rotate-180
}
.dropdown-menu li a:hover {
  @apply bg-[#fafafb] dark:hover-bg-[#111]
}
</style>
