<!-- eslint-disable no-console -->
<script setup lang="ts">
import { Viewer } from '@bytemd/vue-next'
import type { IArticle } from '~~/types/IArticle'
const props = defineProps({
  article: {
    type: Object as () => IArticle,
    required: true,
    default: () => {
      return {
        content: '',
      }
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
const themeStyle = (await import('./themeStyle')).default
const highlightStyle = (await import('./highlightStyle')).default

const plugins = [breaks(), frontmatter(), highlightStyle(), themeStyle(), gemoji(), gfm(), highlight(), math(), medium({ background: 'rgba(0, 0, 0, 0.7)' }), mermaid()]

const isRender = useState('isRender', () => false)
const article = useState('article', () => {
  return { content: '' }
}) // 文章数据
const articleHtmlContent = ref<string>('') // md字符串渲染在view组件中
article.value = props.article

function handleChange(v: string) {
  articleHtmlContent.value = v
  isRender.value = true
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
  if (article.value)
    handleChange(article.value.content)
  setTimeout(() => {
    transformToId()
  }, 1)
})
const { immerseState } = useImmerse()
</script>

<template>
  <div class="main-area article-area" mb-1.5rem>
    <article class="relative pt-2.667rem z-1 rd-t-4px rd-b-0 bg-jj-article">
      <h1 class="mt-0 mr-0 mb-1.667rem ml-0 text-2.667rem fw-600 color-[#252933] lh-1.31em text-jj-font">
        {{ article.title }}
      </h1>

      <div class="flex items-center mb-1.667rem text-0">
        <NuxtLink target="_blank" to="#" class="avatar-link" rel>
          <nuxt-img class="bg-center w-3.333rem h-3.333rem mr-1rem bg-cover rd-50% bg-repeat inline-block relative" :src="article.authorId.avatar" loading="eager" />
        </NuxtLink>
        <div class="min-w-0 flex-1 min-h-43px">
          <div class="h-2rem flex items-center">
            <NuxtLink class="text-1.333rem fw-500 color-[#515767] lh-2rem flex items-center truncate" to="#" target="_blank">
              <span class="inline-block v-top truncate max-w-128px text-jj-span">
                {{ article.authorId.name }}
              </span>
              <span v-show="!immerseState" blank="true" class="ml-0.33rem inline-flex items-center v-middle">
                <img class="w-35px h-16px" :src="`/_nuxt/assets/icon/rank/${props.article.authorId.rank}.png`" loading="eager">
              </span>
            </NuxtLink>
          </div>

          <div v-show="!immerseState" class="text-1.167rem color-[#8a919f] lh-22px mt-2px">
            <time :datetime="article.updatedAt" :title="article.updatedAt" class="tracking-1px">
              {{ useDateFormat(article.updatedAt, 'YYYY-MM-DD HH:mm:ss').value }}
            </time>
            <span class="views-count"> ·&nbsp;&nbsp;阅读 {{ article.viewed }} </span>
          </div>
        </div>
      </div>

      <nuxt-img v-if="article?.cover" loading="eager" :src="article?.cover" class="object-cover relative w-100%" />

      <div itemprop="articleBody" class="article-content">
        <div class="break-all lh-1.75em; fw-400 text-15px color-[#333]; overflow-x-hidden cache bg-jj-light">
          <Viewer v-if="isRender" id="markdown-body" :value="articleHtmlContent" :plugins="plugins" @change="handleChange" />
        </div>
      </div>
    </article>
    <ArticlesContentEnd v-if="isRender" :type="props.article.typeId" :tag="props.article.tagIds" />
  </div>
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
  @apply bg-jj-article
}
@media screen and (max-width: 1140px) {
  .main-area {
    width: calc(100% - 26.67rem);
  }
}

@media screen and (max-width: 1000px) {
  .article-area {
    margin-bottom: 0;
  }
  .main-area {
    width: 100%;
  }
}
@media screen and (max-width: 1000px) {
  .main-area {
    border: none;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
