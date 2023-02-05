import { serve } from 'esbuild';
<script setup>
const props = defineProps({
  author: {
    type: Object,
  },
  tags: {
    type: Object,
  },
})
const { data: ArticleList } = await useFetch(`/api/articles/tags?tags=${JSON.stringify(props.tags.data)}&authorId=${props.author.id}`)
const route = useRoute()
const id = ref(route.params.id)
// 过滤掉当前文章

const articleList = ArticleList.value.filter(item => item.id !== id.value)
</script>

<template>
  <div>
    <div class="sidebar-block related-entry-sidebar-block shadow dark:bg-jj_bg_gray" st:block="relatedEntrySidebarBlock">
      <div class="block-title">
        相关文章
      </div>
      <div class="block-body">
        <div class="entry-list">
          <nuxt-link v-for="item in articleList" :key="item.id" :to="`/article/${item.id}`" target="_blank" rel="" st:name="link" :title="item.title" class="item">
            <div class="entry-title">
              {{ item.title }}
            </div>
            <div class="entry-meta-box">
              <!-- <div class="entry-meta">
                {{ item.liked }}{{ item.liked > 1 ? '赞' : '赞' }}
              </div>
              <div class="entry-meta">
                &nbsp;·&nbsp;
              </div>
              <div class="entry-meta">
                {{ item.commented }}{{ item.commented > 1 ? '评论' : '评论' }}
              </div> -->
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-block:not(.pure) .block-title {
  padding: 1.333rem 0;
  margin: 0 1.667rem;
  font-size: 16px;
  line-height: 2rem;
  color: #1d2129;
  font-weight: 500;
  border-bottom: 1px solid;
  @apply text-jj-content border-b-jj-border-bottom-normal;
}
.sidebar .sidebar-block {
  margin-bottom: 20px;
  border-radius: 4px;
  /* background-color: #fff; */
  @apply bg-jj-article
}

.entry-list {
  padding: 0.667rem 0 1.333rem;
}

.item {
  display: block;
  padding: 0.667rem 1.667rem;
}

.item .entry-title:hover {
  /* color: #1e80ff; */
  @apply text-jj-blue-normal
}

nuxt-link,
button,
input {
  margin: initial;
}

nuxt-link {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

nuxt-link {
  text-decoration: none;
  cursor: pointer;
  /* color: #909090; */
  @apply text-jj-gray-normal
}

nuxt-link:link {
  text-decoration: none;
  @apply text-jj-link-red
}

.entry-title {
  line-height: 22px;
  font-size: 1.167rem;
  font-weight: 400;
  /* color: #252933; */
  @apply  text-jj-font-normal;
}

.entry-meta-box {
  margin-top: 4px;
}

.entry-meta {
  display: inline-block;
  font-size: 1.167rem;
  line-height: 22px;
  /* color: #8a919f; */
  font-weight: 400;
  @apply text-jj-font-entry-normal
}
</style>
