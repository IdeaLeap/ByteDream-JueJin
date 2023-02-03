<script setup>
const props = defineProps({
  content: String,
  author: Object,
  column: Array,
})
const { immerseState } = useImmerse()
</script>

<template>
  <div class="sidebar hidden lg:block lg:w-4/12">
    <ArticlesContentSideBarRightAuthor v-show="!immerseState" :author="props.author" />
    <!-- <ArticlesContentSideBarRightRelatedArticles v-show="!immerseState" class="sidebar-block"  /> -->
    <div class="sticky-block-box">
      <ArticlesContentSideBarRightCatalogue class="sidebar-block" :content="props.content" />
      <ArticlesContentSideBarRightColumn :column="column" />
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
  top: 1.767rem;
  width: inherit;
  transition: top 0.2s;
}
</style>
