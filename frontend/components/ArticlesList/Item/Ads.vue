<script setup lang="ts">
import type { IArticleAd } from '~~/types/IArticleItem'
const ad = inject<IArticleAd>('ads')
const tags = [{
  tag: 'ad',
  alias: '广告',
}]
</script>

<template>
  <li class="relative">
    <ArticlesListUiLink :to="ad?.url">
      <div class="flex-1 overflow-hidden">
        <ArticlesListItemBarTop
          :ad-id="ad?.author"
          :tags="tags"
        />
        <ArticlesListItemBarCenter ad :title="ad?.title" :summary="ad?.summary" />
      </div>
      <ArticlesListUiImg
        :src="ad?.cover"
        :alt="ad?.summary"
      />
    </ArticlesListUiLink>
  </li>
</template>
