<script setup lang="ts">
const route = useRoute()
const isShow = useState<boolean>('isShow', () => false)
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
        <li class="route-active">
          <NuxtLink :to="`${artlistPath}?sort=three_days_hottest`" @click="iptValueHandler('3天内')">
            3天内
          </NuxtLink>
        </li>
        <li class="router-link-exact-active route-active">
          <NuxtLink :to="`${artlistPath}?sort=weekly_hottest`" aria-current="page" @click="iptValueHandler('7天内')">
            7天内
          </NuxtLink>
        </li>
        <li class="route-active">
          <NuxtLink :to="`${artlistPath}?sort=monthly_hottest`" @click="iptValueHandler('30天内')">
            30天内
          </NuxtLink>
        </li>
        <li class="route-active">
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
    position: relative;
    z-index: 9;
  }
  .dorp-down-area .drop-down {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .drop-down {
    position: relative;
    color: #909097;
    min-width: 4rem;
  }
  li {
    list-style: none;
  }
  .dropdown-toggle {
    box-sizing: border-box;
    min-width: 7rem;
    font-size: 1rem;
    border-radius: 2px;
    padding: 2px 10px;
    font-weight: 400;
    border: 1px solid #ebebeb;
  }
  .dropdown-toggle:hover {
    background-color: #fafafb;
    cursor: pointer;
  }
  .toggled {
    transform: rotate(-180deg);
    transition: all 0.5s;
  }

  .dropdown-menu {
    box-sizing: border-box;
    position: absolute;
    top: 105%;
    left: 0;
    z-index: 1000;
    min-width: 7rem;
    font-size: 1rem;
    list-style: none;
    text-align: left;
    border-radius: 0.17rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border: 1px solid #ebebeb;
    background-color: #fff;
  }

  .dropdown-menu li {
    overflow: hidden;
    width: 100%;
  }

  .dropdown-menu li a {
    display: block;
    clear: both;
    padding: 0.83rem;
    line-height: 1.17;
    color: #909097;
  }
  .dropdown-menu li a:hover {
    background-color: #fafafb;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
  }
</style>
