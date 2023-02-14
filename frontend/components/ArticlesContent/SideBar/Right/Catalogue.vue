<script setup lang="ts">
import type { Ref } from 'vue'
import type { ICatalogue } from '@/types/IArticleItem'
const props = defineProps<{
  catalogueList: ICatalogue[]
}>()

/**
 * @description: 目录点击事件
 */
const isActive = ref<number>()
const activeSelect = (index: number) => {
  if (isActive.value === index)
    return
  isActive.value = index
}
const catalogueClass = (level: number) => {
  switch (level) {
    case 1:
      return 'item d1'
    case 2:
      return 'item d2'
    case 3:
      return 'item d3'
    default:
      return 'item'
  }
}

/**
 * @description: 目录滚动定位事件
 */
const itemOffsetTop = ref<{ key: number; top: number }[]>([])
const navRef = ref()
const liRef = ref<HTMLElement[]>([])
const navMid = ref(0)
const headerHeight = ref(0)
const catalogueEleTop = ref(0)
const currentScrollTop = ref(0)

const getInitByScroll = () => {
  navMid.value = navRef.value.clientHeight / 2
  headerHeight.value = document.querySelector('.main-header')!.clientHeight
  catalogueEleTop.value = (document.querySelector('.sticky-block-box') as HTMLElement).offsetTop
  itemOffsetTop.value = []
  props.catalogueList.forEach((val, i) => {
    const firstHead = document.querySelector(`#heading-${i}`) as HTMLElement
    if (firstHead) {
      itemOffsetTop.value?.push({
        key: i,
        top: firstHead.offsetTop,
      })
    }
  })
}
const onScroll = () => {
  const documentElement = document.documentElement
  currentScrollTop.value = documentElement.scrollTop
  const scrollTop = currentScrollTop.value - headerHeight.value + 20
  const itemOffsetTopLength = itemOffsetTop.value.length
  for (let n = 0; n < itemOffsetTopLength; n++) {
    if (scrollTop >= itemOffsetTop.value[n].top)
      isActive.value = itemOffsetTop.value[n].key
  }

  if (isActive.value) {
    const activeEleTop = liRef.value[isActive.value].offsetTop
    navMid.value > activeEleTop
      ? navRef.value.scrollTo({
        top: 0,
      })
      : navRef.value.scrollTo({
        top: activeEleTop - navMid.value,
      })
  }
}

/**
 * @description: 目录固定
 */
const isNavShown = inject('isNavShown') as Ref<Boolean>
const { immerseState } = useImmerse()

let sideBar: HTMLElement | null = null
const getInitByScrollFixedCatalogue = () => {
  const sideBarEle = document.querySelector('.sidebar')
  sideBar = sideBarEle as HTMLElement
}

const scrollFixedCatalogue = () => {
  if (currentScrollTop.value - headerHeight.value > catalogueEleTop.value)
    sideBar!.classList.add('sticky')

  if (currentScrollTop.value - 20 <= catalogueEleTop.value && !immerseState.value && isNavShown.value)
    sideBar!.classList.remove('sticky')

  if (currentScrollTop.value - headerHeight.value <= catalogueEleTop.value && !immerseState.value && !isNavShown.value)
    sideBar!.classList.remove('sticky')
}

watch(isNavShown, (val) => {
  if (val)
    sideBar?.classList.remove('top')
  else
    sideBar?.classList.add('top')
})

watch(immerseState, (val) => {
  if (val)
    sideBar!.classList.add('sticky')
  else
    scrollFixedCatalogue()
})

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('scroll', scrollFixedCatalogue)
  const route = useRoute()
  if (route.hash) {
    const hashIndex = route.hash.slice(9)
    if (Number(hashIndex) !== -1) {
      isActive.value = Number(hashIndex)
      const a = document.createElement('a')
      a.href = `#heading-${hashIndex}`
      a.click()
    }
  }

  nextTick(() => {
    getInitByScroll()
    getInitByScrollFixedCatalogue()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('scroll', scrollFixedCatalogue)
})
</script>

<template>
  <div class="sidebar-block catalog-block catalog-block pure isExpand">
    <nav class="article-catalog">
      <div class="catalog-title">
        目录
      </div>
      <div ref="navRef" class="catalog-body">
        <ul class="catalog-list" style="margin-top: 0px">
          <li v-for="(item, index) in catalogueList" ref="liRef" :key="index" :class="[{ active: index === isActive }, catalogueClass(item.level)]" @click="activeSelect(index)">
            <div class="a-container">
              <NuxtLink :href="`#heading-${index}`" :title="item.text" class="catalog-aTag hover:bg-jj-container-hover-normal">
                {{ item.text }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#heading-3 {
  @apply relative top--50px;
}

.sidebar-block {
  @apply relative mb-20px;
}

.catalog-block.isExpand {
  max-height: 675px;
}

.catalog-block {
  transition: all 0.2s linear;
}

.catalog-block.isExpand .article-catalog {
  height: 100%;
}

.article-catalog {
  @apply bg-jj-sidebar p-0 rd-4px;
}

.catalog-title {
  @apply fw-500 py-1.333rem px-0 mx-1.667rem my-0 text-16px lh-2rem border-b-1 border-b-solid;
  @apply text-jj-content border-b-jj-border-bottom-normal;
}

.catalog-block.isExpand .article-catalog .catalog-body {
  max-height: 460px;
}

.catalog-body {
  @apply relative overflow-auto max-h-460px mt-8px mr-4px mb-0 ml-0;
}

.catalog-body::-webkit-scrollbar {
  width: 6px;
  height: 80px;
}

.catalog-body::-webkit-scrollbar-thumb {
  background-color: #e4e6eb;
  outline: none;
  border-radius: 2px;
}

.catalog-body::-webkit-scrollbar-track {
  box-shadow: none;
  border-radius: 2px;
}

.catalog-list {
  @apply relative lh-22px pb-12px p-0;
}

.catalog-list .item {
  @apply m-0 p-0 text-size-1.167rem fw-400 lh-22px list-none;
  @apply text-jj-container-normal;
}

.catalog-list .item.d1 {
  font-weight: 400;
  @apply text-jj-black-normal;
}

.catalog-list .item.active > .a-container {
  @apply text-jj-link-normal;
}

.catalog-list .item.active > .a-container:before {
  @apply absolute top-4px left-0 mt-7px w-4px h-16px rd-r-4px;
  content: '';
  @apply bg-jj-blue-normal;
}

.catalog-list .item.d1 > .a-container {
  @apply p-0 pl-11px m-0;
}

.catalog-list .item.d2 > .a-container {
  padding-left: 26px;
}

.catalog-list .item.d3 > .a-container {
  padding-left: 41px;
}

.catalog-list .item .a-container {
  @apply block relative p-0 pl-12px truncate;
}

.catalog-list .catalog-aTag {
  @apply color-inherit inline-block p-8px w-90% rd-4px truncate;
}
</style>
