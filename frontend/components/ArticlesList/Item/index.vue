<script setup lang="ts">
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import type { Ref } from 'vue'
import type { IArticleItem } from '~~/types/IArticleItem'
const artlist = inject<Ref<IArticleItem[]>>('artlist')
const [parent] = useAutoAnimate()
const hideHandler = (id: string) => {
  artlist && (artlist.value = artlist.value.filter(item => item.id !== id))
}
</script>

<template>
  <ul ref="parent">
    <ArticlesListItemAds />
    <li v-for="art in artlist" :key="art.id" class="list_container">
      <ArticlesListUiLink class="link" :to="`/article/${art.id}`">
        <div class="left">
          <ArticlesListItemBarTop
            :author-id="art.authorId"
            :duration="formatTime(art.createdAt)"
            :tags="art.tagIds.data"
          />
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
.list_container {
  @apply relative;
}

.list_container:hover .icon {
  @apply block;
}
.left {
  @apply flex-1 truncate;
}
.icon {
  @apply i-carbon-close display-none cursor-pointer text-[16px] text-jj-fourthly hover:text-primary transition absolute top-[1rem] right-[1.67rem];
}
.link:visited :deep(.title) {
  @apply text-jj-navs-title
}
</style>
