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
    <div class="author">
      <span v-if="name" class="name">{{ name }}</span>
      <span v-else class="name">{{ authorId.name }}</span>
      <ArticlesListItemAuthorCard
        v-if="authorId"
        :name="authorId.name"
        :motto="authorId.motto"
        :avatar="authorId.avatar"
        :rank="authorId.rank"
        class="info"
      />
    </div>
    <span :class="`duration ${tags.length ? 'b-r' : ''}`">{{ duration }}</span>
    <div class="tags">
      <div v-for="(item, index) of tags" :key="item.tag" class="tag">
        <span class="content">{{ item.alias }}</span>
        <div v-if="index !== tags.length - 1" class="icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  @apply flex items-center pr-4 text-[13px] leading-[22px]
}
.author {
  @apply transition text-jj-font-normal px-3 border-r-1 pl-0 hover:text-jj-brand-normal
}
.info {
  @apply scale-0 delay-150 transition-all text-black
}
.info:hover {
  @apply scale-100;
}
.name:hover+.info {
  @apply scale-100
}
.duration {
  @apply text-jj-thirdly px-3
}
.b-r {
  @apply border-r-1
}
.tags {
  @apply flex px-3
}
.tag {
  @apply items-center flex
}
.content {
  @apply transition px-0 text-jj-thirdly hover:text-primary
}
.icon {
  @apply i-carbon-circle-solid px-2 text-[0.15rem]
}
</style>
