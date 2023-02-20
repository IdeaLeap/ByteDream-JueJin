<script setup>
defineProps({
  type: {
    type: Object,
  },
  tag: {
    type: Array,
  },
})
</script>

<template>
  <div class="tag-list-box">
    <div v-if="type" class="tag-list">
      <div class="tag-list-title">
        分类：
      </div>
      <NuxtLink :href="`/${type.type}`" target="_blank" rel="" class="item category-item">
        <span class="tag-title">{{ type.alias }}</span>
      </NuxtLink>
    </div>
    <div v-if="tag.length !== 0" class="tag-list">
      <div class="tag-list-title">
        标签：
      </div>
      <div class="tag-list-container">
        <!-- :href="`/tag/${item.alias}`" -->
        <NuxtLink v-for="(item, index) in tag" :key="index" href="/" rel="" class="item tag-item">
          <span class="tag-title">{{ item.alias }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-area {
  border-radius: 4px;
  /* background-color: #fff; */
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  box-sizing: border-box;
  @apply bg-jj_font_white;
}
.tag-list-box {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: -12px;
}
.tag-list-box {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: -12px;
}
.tag-list-box .tag-list:first-child:not(:last-child) {
  margin-right: 2.67rem;
  flex-shrink: 0;
}
.tag-list-box .tag-list {
  display: flex;
  font-size: 1.167rem;
  line-height: 2.286;
}
.tag-list-box .tag-list .tag-list-title {
  flex-shrink: 0;
  margin-right: 8px;
  font-size: 14px;
  /* color: #515767; */
  @apply text-jj-gray-text-normal;
}
.tag-list-box .tag-list .item.category-item {
  @apply text-jj-gray-text-normal bg-jj_bg;
}
.tag-list-box .tag-list .item {
  display: flex;
  align-items: center;
  margin: 0 0.667rem 1rem 0;
  padding: 0 1rem;
  border-radius: 4px;
  transition: background-color 0.15s linear;
}
.tag-list-box .tag-list .tag-title {
  white-space: nowrap;
  line-height: 2.667rem;
}

.tag-list-box .tag-list .tag-list-container {
  display: flex;
  flex-wrap: wrap;
}
.tag-list-box .tag-list .item.tag-item {
  /* background-color: #eaf2ff; */
  /* color: #1e80ff; */
  @apply bg-jj-brand-light-normal text-jj-brand-font-normal;
}
.tag-list-box .tag-list .item {
  display: flex;
  align-items: center;
  margin: 0 0.667rem 1rem 0;
  padding: 0 1rem;
  border-radius: 4px;
  transition: background-color 0.15s linear;
}
.tag-list-box .tag-list .item.tag-item:hover {
  /* background-color: rgba(30, 128, 255, 0.16); */
  @apply bg-jj-tag-normal;
}
.tag-list-box .tag-list .item.category-item:hover {
  @apply bg-jj-border-normal;
}
</style>
