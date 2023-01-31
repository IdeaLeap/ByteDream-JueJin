<script setup lang="ts">
import type { IArticleItem } from '~~/types/IArticleItem'
defineProps({
  artlistItem: {
    type: Array<IArticleItem>,
  },
  artlistAd: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <li>
    <ArticlesListItemsLink :url="artlistAd.url">
      <ArticlesListItemsTopbar
        :name="artlistAd.author"
      />
      <ArticlesListItemsMainbar
        :title="artlistAd.title"
        :summary="artlistAd.summary"
      />
    </ArticlesListItemsLink>
  </li>
  <li
    v-for="artItem in artlistItem"
    :key="artItem.id"
    class="f-c-c py-4 transition-all hover:bg-[#FAFAFA] b-b b-grey all-cursor-pointer"
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
    <div class="px-[1.67rem]">
      <nuxt-img
        v-if="artItem.cover"
        :src="artItem.cover"
        :alt="artItem.summary"
        width="120"
        height="80"
        loading="lazy"
        fit="cover"
        quality="80"
        format="webp"
      />
    </div>
  </li>
</template>

<style scoped>
  a:visited .title {
    color: #909090;
  }
</style>
