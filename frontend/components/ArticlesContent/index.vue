<!-- eslint-disable no-console -->
<script setup lang="ts">
import { Viewer } from '@bytemd/vue-next'
import 'highlight.js/styles/atom-one-dark.css'
const props = defineProps({
  article: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const breaks = (await import('@bytemd/plugin-breaks')).default
const gemoji = (await import('@bytemd/plugin-gemoji')).default
const gfm = (await import('@bytemd/plugin-gfm')).default
const highlight = (await import('@bytemd/plugin-highlight')).default
const math = (await import('@bytemd/plugin-math-ssr')).default
const medium = (await import('@bytemd/plugin-medium-zoom')).default
const mermaid = (await import('@bytemd/plugin-mermaid')).default
const frontmatter = (await import('@bytemd/plugin-frontmatter')).default
const themes = (await import('~~/assets/themes')).themes

const plugins = [
  breaks(),
  frontmatter(),
  {
    viewerEffect({ file }: any) {
      if (typeof file.value != 'object')
        return
      const $style = document.createElement('style')
      try {
        $style.innerHTML = themes[file.value.frontmatter.theme]?.style ?? themes.juejin.style
      }
      catch (e) {
        $style.innerHTML = themes.juejin.style
      }
      document.querySelector('.markdown-body')?.appendChild($style)
      // return () => {
      //   $style.remove()
      // }
    },
  },
  gemoji(),
  gfm(),
  highlight(),
  math(),
  medium(),
  mermaid(),
]
const isRender = ref(false)
const article = ref() // 文章数据
const articleHtmlContent = ref<string>('') // md字符串渲染在view组件中
article.value = props.article

function handleChange(v: string) {
  articleHtmlContent.value = v
}

// 赋值属性唯一ID
function transformToId() {
  const articleDom = document.getElementById('markdown-body')
  const children = Array.from(articleDom!.children)
  if (children.length > 0) {
    let index = 0
    for (let i = 0; i < children.length; i++) {
      const tagName = children[i].tagName
      if (tagName === 'H1' || tagName === 'H2' || tagName === 'H3') {
        children[i].setAttribute('id', `heading-${index}`)
        index++
      }
    }
  }
}

onMounted(() => {
  if (article.value) {
    handleChange(article.value.content)
    isRender.value = true
  }
  setTimeout(() => {
    transformToId()
  }, 1)
})
</script>

<template>
  <div class="main-area article-area" mb-1.5rem>
    <article class="article">
      <h1 class="article-title">
        {{ article?.title }}
      </h1>
      <div class="author-info-block">
        <NuxtLink target="_blank" to="#" class="avatar-link" rel>
          <nuxt-img class="avatar" :src="article?.authorId.avatar" loading="eager" />
        </NuxtLink>
        <div class="author-info-box">
          <div class="author-name">
            <NuxtLink class="username ellipsis" to="#" target="_blank">
              <span class="name" max-w-128px>
                {{ article?.authorId.name }}
              </span>
              <span blank="true" class="rank">
                <nuxt-img class="avatar" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-3.7938ebc.png" loading="eager" />
              </span>
            </NuxtLink>
          </div>

          <div class="meta-box">
            <time :datetime="article?.updatedAt" title="Mon Jan 09 2023 18:31:13 GMT+0800 (China Standard Time)" class="time">
              {{ useDateFormat(article?.updatedAt, 'YYYY-MM-DD HH:mm:ss').value }}
            </time>
            <span class="views-count"> ·&nbsp;&nbsp;{{ article?.viewed }} </span>
          </div>
        </div>
      </div>
      <nuxt-img loading="eager" :src="article?.cover" class="lazy article-hero" />

      <div itemprop="articleBody" class="article-content">
        <div class="markdown-body cache">
          <Viewer
            v-if="isRender"
            id="markdown-body" :value="articleHtmlContent" :plugins="plugins" @change="handleChange"
          />
        </div>
      </div>
    </article>
    <ArticlesContentEnd  :type="props.article.typeId" :tag="props.article.tagIds"/>
  </div>
  <!-- // 骨架屏 -->
  <!-- <span animate-pulse v-else class="h-screen bg-white w-1024px block" >Loading...</span> -->
</template>

<style scoped>
.main-area {
  border-radius: 4px;
  background-color: #fff;
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  box-sizing: border-box;
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

.main-area .article {
  border-radius: 4px 4px 0 0;
}
.article {
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
  font-size: 0;
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
.rank img {
  width: 35px;
  height: 16px;
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

.markdown-body {
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 15px;
  overflow-x: hidden;
  color: #333;
  overflow-x: hidden;
}
</style>
