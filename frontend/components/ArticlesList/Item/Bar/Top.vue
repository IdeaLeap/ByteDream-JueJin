<script setup lang="ts">
import type { ITagItem } from '~~/types/IArticleItem'
defineProps({
  duration: String,
  tags: {
    type: Array<ITagItem>,
    default: [],
  },
  authorId: {
    type: Object,
    default: () => {},
  },
  name: String,
})
</script>

<template>
  <div class="topbar">
    <div class="author-id">
      <span v-if="name" class="name">{{ name }}</span>
      <span v-else class="name">{{ authorId.name }}</span>
      <ArticlesListItemAuthorInfo
        v-if="authorId"
        :name="authorId.name"
        :motto="authorId.motto"
        :avatar="authorId.avatar"
        :rank="authorId.rank"
        class="author-info"
      />
    </div>
    <span :class="`duration ${tags.length ? 'duration-r' : ''}`">{{ duration }}</span>
    <div class="tag-container">
      <div v-for="(item, index) of tags" :key="item.tag" class="tag">
        <span class="tag-content">{{ item.alias }}</span>
        <div v-if="index !== tags.length - 1" class="tag-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  @apply flex items-center pr-4 text-[13px]
}
.author-id {
  @apply transition text-jj-font-normal px-3 border-r-1 pl-0 hover:text-jj-brand-normal
}
.author-info {
  @apply scale-0 delay-150 transition-all text-black
}
.author-info:hover {
  @apply scale-100;
}
.name:hover+.author-info {
  @apply scale-100
}
.duration {
  @apply text-jj-thirdly px-3
}
.duration-r {
  @apply border-r-1
}
.tag-container {
  @apply flex px-3
}
.tag {
  @apply items-center flex
}
.tag-content {
  @apply transition px-0 text-jj-thirdly hover:text-primary
}
.tag-icon {
  @apply i-carbon-circle-solid px-2 text-[0.15rem]
}
</style>
