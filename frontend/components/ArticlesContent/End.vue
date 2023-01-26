<script setup>
const props = defineProps({
  type: {
    type: Object,
  },
  tag: {
    type: Object,
  },
})
</script>

<template lang="">
  <div class="article-end">
    <div class="tag-list-box">
      <div class="tag-list">
        <div class="tag-list-title">分类：</div>
        <a href="/frontend" target="_blank" rel="" class="item category-item"
          ><span class="tag-title">{{ props.type.type }}</span></a
        >
      </div>
      <div class="tag-list">
        <div class="tag-list-title">标签：</div>
        <div class="tag-list-container">
          <a href="/tag/%E5%89%8D%E7%AB%AF" target="_blank" rel="" class="item tag-item"
            ><span class="tag-title" v-for="(item, index) in props.tag.data" :key="index">{{ item.tag }}</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-area .article-end {
  padding-top: 10px;
  border-radius: 0 0 4px 4px;
  padding-bottom: 3.33rem;
}
.main-area > {
  border-radius: 4px;
  background-color: #fff;
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  box-sizing: border-box;
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
  color: #515767;
}
.tag-list-box .tag-list .item.category-item {
  background-color: #f2f3f5;
  color: #515767;
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
  background-color: #eaf2ff;
  color: #1e80ff;
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
  background-color: rgba(30, 128, 255, 0.16);
}
.tag-list-box .tag-list .item.category-item:hover {
  background-color: #e4e6eb;
}
</style>
