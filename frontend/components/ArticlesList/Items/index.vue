<script setup lang="ts">
import type { IArticleItem } from '~~/types/IArticleItem'
defineProps({
  artlistItem: {
    type: Array<IArticleItem>,
  },
})
</script>

<template>
  <li
    v-for="artItem in artlistItem"
    :key="artItem.id"
    class="container"
  >
    <ArticlesListItemsLink :id="artItem.id">
      <ArticlesListItemsTopbar
        :name="artItem.authorId.name"
        :duration="formatTime(artItem.createdAt)"
        :tags="artItem.tagIds.data"
      />
      <ArticlesListItemsMainbar
        :title="artItem.title"
        :summary="artItem.summary"
      />
      <ArticlesListItemsBottombar
        :viewed="artItem.viewed"
        :liked="artItem.liked"
        :commented="artItem.commented"
      />
    </ArticlesListItemsLink>
    <ArticlesListItemsImg
      :cover="artItem.cover"
      :summary="artItem.summary"
    />
  </li>
</template>

<style scoped>
.container {
  @apply f-c-c py-4 transition-all hover:bg-[#FAFAFA] b-b b-grey all-cursor-pointer
}
</style>
