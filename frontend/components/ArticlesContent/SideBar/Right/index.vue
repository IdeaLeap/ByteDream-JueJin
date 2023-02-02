<script setup>
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  author: {
    type: Object,
  },
  relatedArticles: {
    type: Array,
  },
})
const { immerseState } = useImmerse()
</script>

<template>
  <div class="sidebar hidden lg:block lg:w-4/12">
    <ArticlesContentSideBarRightAuthor v-show="!immerseState" :author="props.author" />
    <ArticlesContentSideBarRightRelatedArticles v-show="!immerseState" class="sidebar-block" :article-list="props.relatedArticles" />
    <ArticlesContentSideBarRightCatalogue class="sidebar-block" :content="props.content" />
  </div>
</template>

<style scoped>
.sidebar-block {
  position: relative;
  margin-bottom: 1.5rem;
  background-color: #fff;
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
</style>
