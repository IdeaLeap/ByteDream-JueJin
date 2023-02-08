<script setup>
defineProps({
  article: Object,
})
const { immerseState } = useImmerse()
</script>

<template>
  <div class="sidebar hidden lg:block lg:w-4/12">
    <ArticlesContentSideBarRightAuthor v-if="!immerseState" :author="article.authorId" />
    <ArticlesContentSideBarRightRelatedArticles v-if="!immerseState" class="sidebar-block" :author="article.authorId" :tags="article.tagIds" />
    <div class="sticky-block-box">
      <ArticlesContentSideBarRightCatalogue class="sidebar-block" :content="article.content" />
      <ArticlesContentSideBarRightColumn :column="article.columId" />
    </div>
  </div>
</template>

<style scoped>
.sidebar-block {
  position: relative;
  margin-bottom: 1.5rem;
}
.sidebar .sidebar-block {
  margin-bottom: 20px;
}
.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 25rem;
}
.sticky .sticky-block-box {
  position: fixed;
  top: 6.766999999999999rem;
  width: inherit;
  transition: top 0.2s;
}
</style>
