<script setup lang="ts">
import type { IAuthor } from '@/types/IArticleItem'
defineProps<{
  author: IAuthor
  viewed: Number
  liked: Number
}>()
</script>

<template>
  <div class="sidebar-block author-block pure mb-20px bg-jj-sidebar">
    <NuxtLink href="#" target="_blank" rel class="user-item item pb-1.416rem">
      <nuxt-img format="webp" :src="author.avatar" alt="avatar" class="lazy avatar" loading="lazy" />
      <div class="info-box">
        <div class="username flex items-center">
          <span class="name text-jj-font-normal" style="max-width: 128px"> {{ author.name }} </span>
        </div>
        <div :title="author.motto" class="position">
          {{ author.motto }}
        </div>
      </div>
    </NuxtLink>
    <div class="cut-off" />
    <div class="stat-item item">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" class="zan">
        <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
          <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" />
          <path
            fill="#7BB9FF"
            d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
          />
        </g>
      </svg>
      <span class="content">
        获得点赞
        <span class="count">&nbsp;{{ liked }}</span></span>
    </div>
    <div class="stat-item item">
      <svg data-v-bdf6e7fa="" data-v-71f2d09e="" width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon"><g data-v-bdf6e7fa="" data-v-71f2d09e="" fill="none" fill-rule="evenodd"><circle data-v-bdf6e7fa="" data-v-71f2d09e="" cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF" /><path data-v-bdf6e7fa="" data-v-71f2d09e="" fill="#7BB9FF" d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z" /></g></svg>
      <span class="content">
        文章被阅读
        <span class="count">&nbsp;{{ viewed }}</span></span>
    </div>
  </div>
</template>

<style scoped>
.sidebar-block {
  @apply relative mb-1.5rem;
}
.author-block {
  @apply rd-4px p-1.667rem;
}
.item {
  @apply flex items-center;
}
a {
  @apply decoration-none cursor-pointer b-transparent text-jj-gray-normal;
}
.user-item .avatar {
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.avatar {
  display: inline-block;
  position: relative;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.lazy {
  position: relative;
  -o-object-fit: cover;
  object-fit: cover;
}
img {
  border-style: none;
}
.lazy:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: inherit;
  border-radius: inherit;
}
.lazy:not(.immediate):before {
  transition: opacity 0.2s;
}
.user-item .info-box {
  flex: 1 1 auto;
  min-width: 0;
  margin-left: 1.333rem;
}
.user-item .info-box .username {
  font-size: 1.333rem;
  font-weight: 500;
  line-height: 2rem;
  /* color: #252933; */
  white-space: pre-wrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @apply text-jj_font_black;
}
.username .name {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-item .info-box .username {
  font-size: 1.333rem;
  font-weight: 500;
  line-height: 2rem;
  /* color: #252933; */
  white-space: pre-wrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @apply text-jj_font_black;
}
.user-item .info-box .position {
  margin-top: 4px;
  font-size: 1.167rem;
  /* color: #515767; */
  font-weight: 400;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @apply text-jj-gray-user-normal;
}
.cut-off {
  @apply h-1px;
  background: var(--juejin-gray-1-1);
}
.stat-item{
    margin-top: 0.667rem;
}
.stat-item .content {
  @apply text-1.167rem  fw-400 text-jj-font-normal;
}
.stat-item .icon, .stat-item .zan {
    margin-right: 1rem;
}
</style>
