<script setup lang="ts">
interface IArticle {
  title: string
  like: number
  comment: number
  url: string
  kind: string
  tag: string
  tag1: string
  tag2: string
}
</script>

<template>
  <div>
    <div class="sidebar-block related-entry-sidebar-block shadow" st:block="relatedEntrySidebarBlock">
      <div class="block-title">
        相关文章
      </div>
      <div class="block-body">
        <div class="entry-list">
          <nuxt-link
            href="/post/7181618141456236601" target="_blank" rel="" st:name="link" title="把ChatGPT配置到微信群里，可以对AI提问了！"
            class="item"
          >
            <div class="entry-title">
              把ChatGPT配置到微信群里，可以对AI提问了！
            </div>
            <div class="entry-meta-box">
              <div class="entry-meta">
                30点赞
              </div>
              <div class="entry-meta">
                &nbsp;·&nbsp;
              </div>
              <div class="entry-meta">
                11评论
              </div>
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
  border-bottom: 1px solid #e4e6eb;
}

.entry-list {
  padding: .667rem 0 1.333rem;
}

.item {
  display: block;
  padding: .667rem 1.667rem;
}

.item .entry-title:hover {
  color: #1E80FF;
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
  color: #909090;
}

nuxt-link:link {
  color: #FF0000;
  text-decoration: none;
}

.entry-title {
  line-height: 22px;
  font-size: 1.167rem;
  font-weight: 400;
  color: #252933;
}

.entry-meta-box {
  margin-top: 4px;
}

.entry-meta {
  display: inline-block;
  font-size: 1.167rem;
  line-height: 22px;
  color: #8a919f;
  font-weight: 400;
}
</style>
