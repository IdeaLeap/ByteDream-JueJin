<script setup lang="ts">
/**
 *  @description: 获取目录
 *
 */
import { getProcessor } from 'bytemd'
import { visit } from 'unist-util-visit'
import type { ICatalogue } from '@/types/IArticleItem'
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})
const catalogueList = ref<ICatalogue []>([]) // 目录
const stringifyHeading = (e: any) => {
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
        p.use(() => (tree: any) => {
          if (tree && tree.children.length) {
            const items: { level: number;text: string } [] = []
            tree.children
              .filter((v: any) => v.type === 'element')
              .forEach((node: any) => {
                // 过滤掉主题和高亮
                const removeTheme = node.children.filter((item: any) => item.value?.includes('theme'))
                const removeHl = node.children.filter((item: any) => item.value?.includes('highlight'))

                if (node.tagName[0] === 'h' && !!node.children.length && removeTheme.length === 0 && removeHl.length === 0) {
                  const i = Number(node.tagName[1])
                  items.push({
                    level: i,
                    text: stringifyHeading(node),
                  })
                }
              })
            catalogueList.value = items.filter(v => v.level === 1 || v.level === 2 || v.level === 3)
          }
        }),
    },
  ],
}).processSync(props.article.content)
const { immerseState } = useImmerse()
</script>

<template>
  <div class="sidebar hidden lg:block lg:w-4/12">
    <ArticlesContentSideBarRightAuthor v-if="!immerseState" :author="article!.authorId" />
    <ArticlesContentSideBarRightRelatedArticles v-if="!immerseState" class="sidebar-block" :author="article!.authorId" :tags="article!.tagIds" />
    <div class="sticky-block-box">
      <ArticlesContentSideBarRightCatalogue v-if="catalogueList.length !== 0" class="sidebar-block" :catalogue-list="catalogueList" />
      <ArticlesContentSideBarRightColumn v-if="Object.keys(article!.columId).length !== 0 " :column="article!.columId" />
    </div>
  </div>
</template>

<style scoped>
.sidebar-block {
  position: relative;
  margin-bottom: 1.5rem;
}
.sidebar .sidebar-block {
  margin-bottom: 20px;
}
.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 25rem;
}
.sticky .sticky-block-box {
  position: fixed;
  top: 6.766999999999999rem;
  width: inherit;
  transition: top 0.2s;
}
</style>
