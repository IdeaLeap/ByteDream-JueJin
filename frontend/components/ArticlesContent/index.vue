<!-- eslint-disable no-console -->
<script setup lang="ts">
import { Viewer } from '@bytemd/vue-next'
import breaks from '@bytemd/plugin-breaks'
import gemoji from '@bytemd/plugin-gemoji'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import math from '@bytemd/plugin-math-ssr'
import medium from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'
import frontmatter from '@bytemd/plugin-frontmatter'

import themeStyle from './themeStyle'
import highlightStyle from './highlightStyle'
import type { IArticle } from '~~/types/IArticle'

const props = defineProps({
  article: {
    type: Object as () => IArticle,
    required: true,
  },
})
const plugins = [breaks(), frontmatter(), highlightStyle(), themeStyle(), gemoji(), gfm(), highlight(), math(), medium({ background: 'rgba(0, 0, 0, 0.7)' }), mermaid()]

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

const route = useRoute()
const url = ref(`/api/articles/${route.params.id}`)
const { data: articleData } = await useFetch(url)
onMounted(() => {
  transformToId()
})
const { immerseState } = useImmerse()
</script>

<template>
  <article class="relative pt-2.667rem z-1 rd-t-4px rd-b-0 bg-jj-article">
    <h1 class="mt-0 mr-0 mb-1.667rem ml-0 text-2.667rem fw-600 lh-1.31em text-jj-font-normal">
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
              <img class="w-35px h-16px" :src="`https://pan.marlene.top/d/share/jj/${article.authorId.rank}.png`" loading="eager">
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
        <Viewer id="markdown-body" :value="articleData.article.content" :plugins="plugins" />
      </div>
    </div>
  </article>
</template>
