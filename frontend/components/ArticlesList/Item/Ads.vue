<script setup lang="ts">
import type { IArticleAd } from '~~/types/IArticleItem'
const ad = inject<IArticleAd>('ads')
</script>

<template>
  <li v-if="ad">
    <ArticlesListUiLink :to="ad.url">
      <div class="overflow-hidden flex-1">
        <ArticlesListItemBarTop
          :name="ad.author"
          duration="2天前"
        />
        <div>
          <div class="title">
            {{ ad.title }}
          </div>
          <div class="summary">
            {{ ad.summary }}
          </div>
        </div>
      </div>
      <ArticlesListUiImg
        :src="ad.cover"
        :alt="ad.summary"
      />
    </ArticlesListUiLink>
  </li>
</template>

<style scoped>
.title {
  @apply truncate  my-3 text-jj-font-normal text-[16px] title font-semibold tracking-wide
}
.summary {
  @apply whitespace-pre-wrap mlg:max-w-[520px] text-jj_thirdly text-[13px]
}
</style>
