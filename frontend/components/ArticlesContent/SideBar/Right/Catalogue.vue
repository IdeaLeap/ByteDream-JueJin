<script setup>
import { getProcessor } from 'bytemd'
import { visit } from 'unist-util-visit'
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})
/**
 *  @description: 获取目录
 *
 */
const Catalogue = ref([]) // 目录
const stringifyHeading = (e) => {
  let result = ''
  visit(e, (node) => {
    if (node.type === 'text')
      result += node.value
  })
  return result
}
getProcessor({
  plugins: [
    {
      rehype: p =>
        p.use(() => (tree) => {
          if (tree && tree.children.length) {
            const items = []
            tree.children
              .filter(v => v.type === 'element')
              .forEach((node) => {
                // 过滤掉主题和高亮
                const removeTheme = node.children.filter(item => item.value?.includes('theme'))
                const removeHl = node.children.filter(item => item.value?.includes('highlight'))

                if (node.tagName[0] === 'h' && !!node.children.length && removeTheme.length === 0 && removeHl.length === 0) {
                  const i = Number(node.tagName[1])
                  items.push({
                    level: i,
                    text: stringifyHeading(node),
                  })
                }
              })
            Catalogue.value = items.filter(v => v.level === 1 || v.level === 2 || v.level === 3)
          }
        }),
    },
  ],
}).processSync(props.content)

/**
 * @description: 目录点击事件
 */
const isActive = ref()
const activeSelect = (index) => {
  if (isActive.value === index)
    return
  isActive.value = index
}
const catalogueClass = (level) => {
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
let headerHeight
const itemOffsetTop = ref([])
const navRef = ref(null)
const liRef = ref([])

const onScroll = () => {
  const navMid = navRef.value.clientHeight / 2
  itemOffsetTop.value = []
  Catalogue.value.forEach((val, i) => {
    const firstHead = document.querySelector(`#heading-${i}`)
    if (firstHead) {
      itemOffsetTop.value.push({
        key: i,
        top: firstHead.offsetTop,
      })
    }
  })
  const scrollTop = document.documentElement.scrollTop - headerHeight + 20
  for (let n = 0; n < itemOffsetTop.value.length; n++) {
    if (scrollTop >= itemOffsetTop.value[n].top)
      isActive.value = itemOffsetTop.value[n].key
  }
  const activeELe = liRef.value[isActive.value]?.offsetTop
  navMid > activeELe
    ? navRef.value.scrollTo({
      top: 0,
    })
    : navRef.value.scrollTo({
      top: activeELe - navMid,
    })

  window.scrollTo({
    left: 0,
  })
}

/**
 * @description: 目录固定
 */
const isNavShown = inject('isNavShown')
const firtstCatalogueTop = ref(0)
let catalogue
let currentTop
let sideBar
const { immerseState, immerseToggle } = useImmerse()
const scrollFixedCatalogue = () => {
  const scrollTop = document.documentElement.scrollTop
  sideBar = document.querySelector('.sidebar')
  catalogue = document.querySelector('.sticky-block-box')
  currentTop = parseFloat(window.getComputedStyle(catalogue).top)
  if (scrollTop - headerHeight > catalogue.offsetTop)
    sideBar.classList.add('sticky')
  if (scrollTop <= firtstCatalogueTop.value && !immerseState.value)
    sideBar.classList.remove('sticky')
}

let originTop
watch([isNavShown], (val) => {
  val[0] ? catalogue.style.top = `${currentTop + headerHeight}px` : catalogue.style.top = '1.767rem'
})
watch([immerseState], (val) => {
  if (val[0]) {
    sideBar.classList.add('sticky')
  }
  else {
    firtstCatalogueTop.value = originTop
    scrollFixedCatalogue()
  }
})
onMounted(() => {
  headerHeight = document.querySelector('.main-header').clientHeight
  const route = useRoute()

  setTimeout(() => {
    window.scroll(0, 0)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('scroll', scrollFixedCatalogue)
    if (route.hash) {
      const hashIndex = route.hash.slice(9)
      if (hashIndex !== -1) {
        isActive.value = hashIndex
        const a = document.createElement('a')
        a.href = `#heading-${hashIndex}`
        a.click()
      }
    }
    originTop = document.querySelector('.sticky-block-box').offsetTop
    firtstCatalogueTop.value = originTop
  }, 1)
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
          <li v-for="(item, index) in Catalogue" ref="liRef" :key="index" :class="[{ active: index === isActive }, catalogueClass(item.level)]" @click="activeSelect(index)">
            <div class="a-container">
              <a :href="`#heading-${index}`" :title="item.text" class="catalog-aTag hover:bg-jj-container-hover-normal"> {{ item.text }} </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#heading-3 {
  @apply relative top--50px
}

.sidebar-block {
  @apply relative mb-20px
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
  @apply bg-jj-sidebar p-0 rd-4px
}

.catalog-title {
  @apply fw-500 py-1.333rem px-0 mx-1.667rem my-0 text-16px lh-2rem border-b-1 border-b-solid;
  @apply text-jj-content border-b-jj-border-bottom-normal;
}

.catalog-block.isExpand .article-catalog .catalog-body {
  max-height: 612px;
}

.catalog-body {
  @apply relative overflow-auto max-h-460px mt-8px mr-4px mb-0 ml-0;
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
  @apply color-inherit inline-block p-8px w-90% rd-4px truncate
}
</style>
