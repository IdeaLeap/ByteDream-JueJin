<script setup lang="ts">
import type { IAuthor, ITagItem } from '~~/types/IArticleItem'
defineProps<{
  duration: string
  tags?: ITagItem[]
  authorId?: IAuthor
  adId?: string
}>()
const show = useState('authorCard', () => false)
</script>

<template>
  <div class="topbar" :class="!adId ? 'px-[1.67rem]' : ''">
    <div class="author">
      <span class="name" @mouseover="show = true">{{ adId ? adId : authorId?.name }}</span>
      <LazyArticlesListItemAuthorCard
        v-if="show && authorId"
        :name="authorId.name"
        :motto="authorId.motto"
        :avatar="authorId.avatar"
        :rank="authorId.rank"
        class="info"
      />
    </div>
    <div v-if="!adId">
      <span class="duration">{{ duration }}</span>
    </div>
    <div class="flex px-3">
      <div v-for="(item, index) of tags" :key="item.tag" class="tag">
        <div v-if="index" class="icon" />
        <span>{{ item.alias }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  @apply flex items-center pr-4 text-[13px] leading-[22px] pt-[1rem] all-cursor-pointer
}
.author {
  @apply transition text-jj-font-normal px-3 pl-0 hover:text-jj-brand-normal
}
.info {
  @apply scale-0 delay-150 transition-all text-black
  @apply hover:scale-100
}
.name:hover+.info {
  @apply scale-100
}
.duration {
  @apply text-jj-thirdly px-3 relative
}
.duration::before, .duration::after {
  @apply content-none absolute top-1/2 -translate-y-1/2 display-block w-[1px] h-[12px] bg-[#e5e6eb]
}
.duration::after {
  @apply right-0
}
.tag {
  @apply flex items-center
}
.tag span {
  @apply transition px-0 text-jj-thirdly hover:text-primary
}
.icon {
  @apply i-carbon-circle-solid px-2 text-[0.15rem]
  @apply dark:text-jj-thirdly
}
</style>
