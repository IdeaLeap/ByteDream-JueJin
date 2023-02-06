<script setup lang="ts">
import { ITagItem } from '~~/types/IArticleItem'
const { uid } = defineProps({
  uid: String,
  title: String,
  viewed: Number,
  liked: Number,
  commented: Number,
  summary: String,
  cover: String,
  createdAt: {
    type: String,
    required: true,
  },
  authorId: {
    type: Object,
    required: true,
  },
  tags: Array,
  index: Number,
})
const hideHandler = () => {
  const lis = document.getElementById(`artlist_${uid}`)
  if (lis === null)
    return
  lis.style.display = 'none'
}
</script>

<template>
  <li :id="`artlist_${uid}`" class="list_container">
    <ArticlesListItemLink :to="`/article/${uid}`">
      <div class="left">
        <ArticlesListItemBarTop
          :author-id="authorId"
          :duration="formatTime(createdAt)"
          :tags="tags as ITagItem[]"
        />
        <ArticlesListItemBarCenter :title="title" :summary="summary" />
        <ArticlesListItemBarBottom :viewed="viewed" :liked="liked" :commented="commented" />
      </div>
      <nuxt-img
        v-if="cover"
        :src="cover"
        :alt="summary"
        loading="lazy"
        fit="fill"
        quality="80"
        format="webp"
        class="cover"
      />
    </ArticlesListItemLink>
    <div
      class="icon"
      @click="hideHandler"
    />
  </li>
</template>

<style scoped>
.list_container {
  @apply relative
}
.list_container:hover .icon {
  @apply block
}
.left {
  @apply flex-1 truncate
}
.icon {
  @apply i-carbon-close display-none cursor-pointer text-[16px] text-jj-fourthly hover:text-primary transition absolute top-[1rem] right-[1.67rem]
}
.cover {
  @apply mx-[1.67rem] mb-[-2rem] w-[120px] h-[80px]
}
</style>
