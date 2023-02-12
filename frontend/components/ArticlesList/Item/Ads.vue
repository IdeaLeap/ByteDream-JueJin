<script setup lang="ts">
import type { IArticleAd } from '~~/types/IArticleItem'
const ad = inject<IArticleAd>('ads')
</script>

<template>
  <li class="relative">
    <ArticlesListUiLink :to="ad?.url">
      <div class="overflow-hidden flex-1">
        <ArticlesListItemBarTop
          :name="ad?.author"
          duration="广告"
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
