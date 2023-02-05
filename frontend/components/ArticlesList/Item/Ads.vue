<script setup lang="ts">
defineProps({
  title: String,
  author: String,
  summary: String,
  cover: String,
  url: String,
})
</script>

<template>
  <li>
    <ArticlesListItemLink :to="url">
      <div class="overflow-hidden flex-1">
        <ArticlesListItemBarTop
          :name="author"
          duration="2天前"
        />
        <div>
          <div class="title">
            {{ title }}
          </div>
          <div class="summary">
            {{ summary }}
          </div>
        </div>
      </div>
      <nuxt-img
        :src="cover"
        :alt="summary"
        loading="lazy"
        fit="fill"
        quality="80"
        format="webp"
        class="cover"
      />
    </ArticlesListItemLink>
  </li>
</template>

<style scoped>
.cover {
  @apply mx-[1.67rem] mb-[-2rem] w-[120px] h-[80px]
}
.title {
  @apply truncate  my-3 text-jj-font text-[16px] title font-semibold tracking-wide
}
.summary {
  @apply whitespace-pre-wrap mlg:max-w-[520px] text-jj_thirdly text-[13px]
}
</style>
