<script setup lang="ts">
import type { ITagItem } from '~~/types/IArticleItem'
defineProps({
  name: String,
  duration: String,
  tags: {
    type: Array<ITagItem>,
    required: true,
  },
})
</script>

<template>
  <div class="topbar">
    <span class="author_id">{{ name }}</span>
    <span class="duration">{{ duration }}</span>
    <div class="tag_container">
      <div v-for="(item, index) of tags" :key="item.tag" class="tag">
        <span class="tag_content">{{ item.tag }}</span>
        <div v-if="index !== tags.length - 1" class="tag_icon" />
      </div>
    </div>
  </div>
  <ArticlesListItemAuthorInfo
    :name="name"
    :duration="duration"
    class="author_info"
  />
</template>

<style scoped>
.topbar {
  @apply flex items-center pr-4 text-[13px]
}
.author_id {
  @apply transition text-jj-font px-3 border-r-1 pl-0 hover:text-[#1E80FF]
}
.author_info {
  display: none;
}
.author_id:hover .author_info {
  display: block;
}
.duration {
  @apply text-jj-thirdly px-3 border-r-1
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
