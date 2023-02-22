<script setup lang="ts">
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import type { Ref } from 'vue'
import type { IArticleItem } from '~~/types/IArticleItem'
const artlist = inject<Ref<IArticleItem[]>>('artlist')
const [parent] = useAutoAnimate()
const formatTime = (createdAt: string): string => {
  const created = new Date(createdAt)
  const now = new Date()
  const duration = (now.getTime() - created.getTime()) / 1000 / 60
  let ans = '刚刚'
  if (duration > 0 && duration < 60) // 一小时内
    ans = `${(duration).toFixed(0)}分钟前`
  else if (duration < 60 * 24) // 一天内
    ans = `${(duration / 60).toFixed(0)}小时前`
  else if (duration < 60 * 24 * 30) // 一个月内
    ans = `${(duration / 60 / 24).toFixed(0)}天前`
  else if (duration < 60 * 24 * 30 * 365) // 一年内
    ans = `${(duration / 60 / 24 / 30).toFixed(0)}月前`
  else if (duration >= 60 * 24 * 30 * 365) // 超过一年
    ans = `${(duration / 60 / 24 / 30 / 365).toFixed(0)}年前`
  return ans
}
const hideHandler = (id: string) => {
  artlist && (artlist.value = artlist.value.filter(item => item.id !== id))
}
</script>

<template>
  <ul ref="parent">
    <ArticlesListItemAds />
    <li v-for="art in artlist" :key="art.id" class="relative">
      <ArticlesListItemBarTop
        :author-id="art.authorId"
        :duration="formatTime(art.createdAt)"
        :tags="art.tagIds.data"
      />
      <ArticlesListUiLink class="link" :to="`/article/${art.id}`">
        <div class="flex-1 truncate">
          <ArticlesListItemBarCenter :title="art.title" :summary="art.summary" />
          <ArticlesListItemBarBottom :viewed="art.viewed" :liked="art.liked" :commented="art.commented" />
        </div>
        <ArticlesListUiImg v-if="art.cover" :src="art.cover" :alt="art.summary" />
      </ArticlesListUiLink>
      <div class="icon" @click="hideHandler(art.id)" />
    </li>
  </ul>
</template>

<style scoped>
li {
  @apply transition hover:bg-jj-hover
}
li:hover .icon {
  @apply block
}
.icon {
  @apply i-carbon-close transition absolute top-[1rem] right-[1.67rem] display-none cursor-pointer text-[16px] text-jj-fourthly hover:text-primary
}
.link:visited :deep(.title) {
  @apply text-jj-navs-title
}
</style>
