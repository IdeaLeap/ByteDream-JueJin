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
    <div class="author_id">
      <span v-if="name" class="name">{{ name }}</span>
      <span v-else class="name">{{ authorId.name }}</span>
      <ArticlesListItemAuthorInfo
        v-if="authorId"
        :name="authorId.name"
        :motto="authorId.motto"
        :avatar="authorId.avatar"
        :rank="authorId.rank"
        class="author_info"
      />
    </div>
    <span :class="`duration ${tags.length ? 'duration-r' : ''}`">{{ duration }}</span>
    <div class="tag_container">
      <div v-for="(item, index) of tags" :key="item.tag" class="tag">
        <span class="tag_content">{{ item.tag }}</span>
        <div v-if="index !== tags.length - 1" class="tag_icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  @apply flex items-center pr-4 text-[13px]
}
.author_id {
  @apply transition text-jj-font px-3 border-r-1 pl-0 hover:text-[#1E80FF]
}
.author_info {
  @apply scale-0 delay-150 transition-all text-black
}
.author_info:hover {
  @apply scale-100;
}
.name:hover+.author_info {
  @apply scale-100
}
.duration {
  @apply text-jj-thirdly px-3
}
.duration-r {
  @apply border-r-1
}
.tag_container {
  @apply flex px-3
}
.tag {
  @apply items-center flex
}
.tag_content {
  @apply transition px-0 text-jj-thirdly hover:text-primary
}
.tag_icon {
  @apply i-carbon-circle-solid px-2 text-[0.15rem]
}
</style>
