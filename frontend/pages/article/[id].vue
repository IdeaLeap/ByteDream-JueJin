<!-- eslint-disable no-console -->
<script setup lang="ts">
import 'highlight.js/styles/atom-one-dark.css'
import { Viewer } from 'bytemd'
const breaks = (await import('@bytemd/plugin-breaks')).default
const gemoji = (await import('@bytemd/plugin-gemoji')).default
const gfm = (await import('@bytemd/plugin-gfm')).default
const highlight = (await import('@bytemd/plugin-highlight')).default
const math = (await import('@bytemd/plugin-math-ssr')).default
const medium = (await import('@bytemd/plugin-medium-zoom')).default
const mermaid = (await import('@bytemd/plugin-mermaid')).default
const frontmatter = (await import('@bytemd/plugin-frontmatter')).default
const themes = (await import('~~/assets/themes')).themes
// const { marked } = await import('marked')
const plugins = [
  breaks(),
  frontmatter(),
  {

    viewerEffect({ file }: any) {
      if (typeof (file.value) != 'object')
        return
      const $style = document.createElement('style')
      try {
        $style.innerHTML = themes[file.value.frontmatter.theme]?.style ?? themes.juejin.style
      }
      catch (e) {
        $style.innerHTML = themes.juejin.style
      }

      document.head.appendChild($style)
      return () => {
        $style.remove()
      }
    },
  },
  gemoji(),
  gfm(),
  highlight(),
  math(),
  medium(),
  mermaid(),
]
interface IPost {
  title: string
  author: string
  body: string
  createAt: string
  updatedAt: string
  viewsCount: number
  articleHero: string
  avatar: string
  rank: number
}

const route = useRoute()
const url = ref(`/api/posts/${route.params.id}`)

// const { data: articleData } = await useFetch(url)
// console.log(articleData)
// const article = ref<IPost>() // 文章数据
// const articleHtmlContent = ref() // md字符串渲染在view组件中
// article.value = articleData.value.data.post.data.attributes
// // let mdHTMl = ''
// // mdHTMl = marked.parse(articleData.value.data.post.data.attributes.body)
onMounted(() => {
  window.addEventListener('scroll', handleScroll, false) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  // handleChange(article.value?.body)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
function handleScroll() {
  console.log(1)
}
// function handleChange(v: any) {
//   // 这里获取的是md字符串
//   articleHtmlContent.value = v
// }
const rightNormalContainer = ref<HTMLInputElement>()
</script>

<template>
  <main class="container main-container" style="max-width:1140px">
    <!-- view column-view -->
    <div class="view column-view mt-1.767rem" pt-0 pr-0 pb-8rem bg-yello>
      <!-- main-area article-area -->
      <div class="main-area article-area bg-green" mb-1.5rem>
        <article class="article">
          <h1 class="article-title">
            <!-- 这里是文章 -->
            <!-- {{ article?.title }} -->
          </h1>
          <div class="author-info-block">
            <!-- 头像 -->
            <NuxtLink target="_blank" to="#" class="avatar-link" rel>
              <!-- <nuxt-img class="avatar" :src="article?.avatar" loading="eager" /> -->
            </NuxtLink>
            <!-- 作者信息 -->
            <div class="author-info-box">
              <div class="author-name">
                <NuxtLink class="username  ellipsis" to="#" target="_blank">
                  <!-- <span class="name" max-w-128px>{{ article?.author }} -->
                  <!-- </span> -->
                  <!-- <span blank="true" class="rank">等级：{{ article?.rank }}</span> -->
                </NuxtLink>
              </div>

              <div class="meta-box">
                <!-- <time :datetime="article?.updatedAt" title="Mon Jan 09 2023 18:31:13 GMT+0800 (China Standard Time)"
                  class="time">
                  {{ useDateFormat(article?.updatedAt, 'YYYY-MM-DD HH:mm:ss').value }}
                </time> -->
                <span class="views-count">
                  <!-- ·&nbsp;&nbsp;{{ article?.viewsCount }} -->
                </span>
              </div>
            </div>
          </div>
          <nuxt-img
            loading="eager"
            src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64ae7f2565544e9b87d92e21ced7350a~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?"
            class="lazy article-hero"
          />

          <div itemprop="articleBody" class="article-content">
            <div class="markdown-body cache">
              <!-- <Viewer id="markdown-body" :value="articleHtmlContent" :plugins="plugins" @change="handleChange" /> -->
            </div>
          </div>
        </article>
      </div>
      <div ref="rightNormalContainer" class="sidebar top bg-yellow hidden lg:block lg:w-4/12">
        <!-- 目录 -->
        <div class="sticky-block-box" data-v-4a0b7e3a="">
          <div
            class="sidebar-block catalog-block catalog-block pure isExpand" style="" data-v-71f2d09e=""
            data-v-4a0b7e3a=""
          >
            <nav class="article-catalog" style="" data-v-cb93f23a="" data-v-71f2d09e="">
              <div class="catalog-title" data-v-cb93f23a="">
                目录
              </div>
              <div class="catalog-body" data-v-cb93f23a="">
                <ul class="catalog-list" style="margin-top:0px;" data-v-cb93f23a="">
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-0" title="前言" class="catalog-aTag">
                        前言
                      </a>
                    </div> <!---->
                  </li>
                  <li data-v-cb93f23a="" class="item d1 active">
                    <div class="a-container">
                      <a href="#heading-1" title="plugin简要介绍" class="catalog-aTag">
                        plugin简要介绍
                      </a>
                    </div>
                    <ul class="sub-list">
                      <li class="item d2">
                        <div class="a-container">
                          <a href="#heading-2" title="断点调试" class="catalog-aTag">
                            断点调试
                          </a>
                        </div> <!---->
                      </li>
                    </ul>
                  </li>
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-3" title="hello plugin" class="catalog-aTag">
                        hello plugin
                      </a>
                    </div> <!---->
                  </li>
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-4" title="analyze-webpack-plugin" class="catalog-aTag">
                        analyze-webpack-plugin
                      </a>
                    </div> <!---->
                  </li>
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-5" title="clean-webpack-plugin" class="catalog-aTag">
                        clean-webpack-plugin
                      </a>
                    </div> <!---->
                  </li>
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-6" title="copy-webpack-plugin" class="catalog-aTag">
                        copy-webpack-plugin
                      </a>
                    </div> <!---->
                  </li>
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-7" title="define-webpack-plugin" class="catalog-aTag">
                        define-webpack-plugin
                      </a>
                    </div> <!---->
                  </li>
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-8" title="html-webpack-plugin" class="catalog-aTag">
                        html-webpack-plugin
                      </a>
                    </div> <!---->
                  </li>
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-9" title="md2html-webpack-plugin" class="catalog-aTag">
                        md2html-webpack-plugin
                      </a>
                    </div> <!---->
                  </li>
                  <li data-v-cb93f23a="" class="item d1">
                    <div class="a-container">
                      <a href="#heading-10" title="最后" class="catalog-aTag">
                        最后
                      </a>
                    </div> <!---->
                  </li>
                </ul>
              </div>
            </nav>
          </div> <!---->
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}

.main-area {
  box-sizing: border-box;
  background-color: #fff;
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  position: relative;
  width: 820px;
  max-width: 100%;
}

@media screen and (max-width: 1140px) {
  .main-area {
    width: calc(100% - 26.67rem);
  }
}

@media screen and (max-width: 1024px) {
  .article-area {
    margin-bottom: 0;
  }

  .main-area {
    width: 100%;
  }
}

/*
  * left-area article-area
*/
.article {
  border-radius: 4px 4px 0 0;
  position: relative;
  padding-top: 2.667rem;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .main-area {
    border: none;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/*
  * 作者信息
 */

.article-title {
  margin: 0 0 1.667rem;
  font-size: 2.667rem;
  font-weight: 600;
  line-height: 1.31;
  color: #252933;
}

.author-info-block {
  display: flex;
  align-items: center;
  margin-bottom: 1.667rem;
  font-size: 0
}

.avatar {
  margin-right: 1rem;
  width: 3.333rem;
  height: 3.333rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.author-info-box {
  min-width: 0;
  flex-grow: 1;
  flex: 1;
  min-height: 43px;
}

.author-name {
  height: 2rem;
  display: flex;
  align-items: center;
}

.username {
  font-size: 1.333rem;
  font-weight: 500;
  color: #515767;
  line-height: 2rem;
  display: flex;
  align-items: center;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lazy {
  position: relative;
  object-fit: cover;
}

.name {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rank {
  display: inline-flex;
  align-items: center;
  margin-left: 0.33rem;
  vertical-align: middle;
}

.meta-box {
  font-size: 1.167rem;
  color: #8a919f;
  margin-top: 2px;
  line-height: 22px;
}

.time {
  letter-spacing: 1px;
}

.article-hero {
  width: 100%;
}

/**
  * markdown部分
 */
.markdown-body {
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 15px;
  overflow-x: hidden;
  color: #333;
  overflow-x: hidden;
}

/* 侧边栏 */
.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 25rem;
}

.sidebar-block {
  position: relative;
  margin-bottom: 1.5rem;
  border-radius: 2px;
}

.sidebar .sidebar-block {
  margin-bottom: 20px;
}

.catalog-block.isExpand {
  max-height: 675px;
}

.catalog-block {
  transition: all .2s linear;
}

.catalog-block.isExpand .article-catalog {
  height: 100%;
}

.article-catalog {
  background: #fff;
  border-radius: 4px;
  padding: 0;
}

.catalog-title {
  font-weight: 500;
  padding: 1.333rem 0;
  margin: 0 1.667rem;
  font-size: 16px;
  line-height: 2rem;
  color: #1d2129;
  border-bottom: 1px solid #e4e6eb;
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
}

.catalog-list .item.d1 {
  font-weight: 400;
  color: #000;
}

.catalog-list .item.active>.a-container {
  color: #007fff;
}

.catalog-list .item.d1>.a-container {
  margin: 0;
  padding: 0 0 0 11px;
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
}
</style>

