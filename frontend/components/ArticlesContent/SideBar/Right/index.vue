<script setup>
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  author: {
    type: Object,
  },
  column: {
    type: Array,
  },
})
const { immerseState } = useImmerse()
</script>

<template>
  <div class="sidebar hidden lg:block lg:w-4/12">
    <ArticlesContentSideBarRightAuthor v-show="!immerseState" :author="props.author" />
    <!-- <ArticlesContentSideBarRightRelatedArticles v-show="!immerseState" class="sidebar-block"  /> -->
    <ArticlesContentSideBarRightCatalogue class="sidebar-block" :content="props.content" :column="column" />
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
</style>
