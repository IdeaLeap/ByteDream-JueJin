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
const onScroll = () => {
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
const scrollFixedCatalogue = () => {
  const scrollTop = document.documentElement.scrollTop
  const sideBar = document.querySelector('.sidebar')
  catalogue = document.querySelector('.sticky-block-box')
  currentTop = parseFloat(window.getComputedStyle(catalogue).top)
  if (scrollTop - headerHeight > catalogue.offsetTop)
    sideBar.classList.add('sticky')
  if (scrollTop <= firtstCatalogueTop.value)
    sideBar.classList.remove('sticky')
}

watch(isNavShown, (val) => {
  if (val)
    catalogue.style.top = `${currentTop + headerHeight}px`
  else
    catalogue.style.top = '1.767rem'
})
onMounted(() => {
  headerHeight = document.querySelector('.main-header').clientHeight
  window.addEventListener('scroll', onScroll)
  window.addEventListener('scroll', scrollFixedCatalogue)

  const route = useRoute()
  setTimeout(() => {
    if (route.hash) {
      const hashIndex = route.hash.slice(9)
      if (hashIndex !== -1) {
        isActive.value = hashIndex
        const a = document.createElement('a')
        a.href = `#heading-${hashIndex}`
        a.click()
      }
    }
  }, 1)
  firtstCatalogueTop.value = document.querySelector('.sticky-block-box').offsetTop
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('scroll', scrollFixedCatalogue)
})
</script>

<template>
  <div class="sidebar-block catalog-block catalog-block pure isExpand" style="">
    <nav class="article-catalog">
      <div class="catalog-title">
        目录
      </div>
      <div class="catalog-body">
        <ul class="catalog-list" style="margin-top: 0px">
          <li v-for="(item, index) in Catalogue" :key="index" :class="[{ active: index === isActive }, catalogueClass(item.level)]" @click="activeSelect(index)">
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
  position: relative;
  top: -50px;
}
.sidebar-block {
  position: relative;
  /* margin-bottom: 1.5rem; */
  margin-bottom: 20px;
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
  /* background: #fff; */
  border-radius: 4px;
  padding: 0;
  @apply bg-jj-sidebar;
}

.catalog-title {
  font-weight: 500;
  padding: 1.333rem 0;
  margin: 0 1.667rem;
  font-size: 16px;
  line-height: 2rem;
  color: #1d2129;
  border-bottom: 1px solid #e4e6eb;
  @apply text-jj-content border-b-jj-border-bottom-normal;
}

.catalog-block.isExpand .article-catalog .catalog-body {
  max-height: 612px;
}

.catalog-body {
  position: relative;
  max-height: 460px;
  margin: 8px 4px 0 0;
  overflow: auto;
}

.catalog-list {
  position: relative;
  line-height: 22px;
  padding: 0 0 12px;
}

.catalog-list .item {
  margin: 0;
  padding: 0;
  font-size: 1.167rem;
  font-weight: 400;
  line-height: 22px;
  color: #333;
  list-style: none;
  @apply text-jj-container-normal;
}

.catalog-list .item.d1 {
  font-weight: 400;
  color: #000;
}

.catalog-list .item.active > .a-container {
  color: #007fff;
}

.catalog-list .item.active > .a-container:before {
  content: '';
  position: absolute;
  top: 4px;
  left: 0;
  margin-top: 7px;
  width: 4px;
  height: 16px;
  background: #1e80ff;
  border-radius: 0 4px 4px 0;
}
.catalog-list .item.d1 > .a-container {
  margin: 0;
  padding: 0 0 0 11px;
}
.catalog-list .item.d2 > .a-container {
  padding-left: 26px;
}
.catalog-list .item.d3 > .a-container {
  padding-left: 41px;
}
.catalog-list .item .a-container {
  display: block;
  position: relative;
  padding: 0 0 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.catalog-list .catalog-aTag {
  color: inherit;
  display: inline-block;
  padding: 8px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 4px;
  @apply text-jj-container-normal
}
</style>
