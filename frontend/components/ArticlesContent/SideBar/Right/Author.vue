<script setup>
defineProps({
  author: {
    type: Object,
  },
})
</script>

<template>
  <div class="sidebar-block author-block pure mb-20px bg-jj-sidebar">
    <NuxtLink href="#" target="_blank" rel class="user-item item pb-1.416rem">
      <img :src="author.avatar" alt="avatar" class="lazy avatar" loading="lazy">
      <div class="info-box">
        <div class="username flex items-center">
          <span class="name text-jj-font-normal" style="max-width: 128px"> {{ author.name }} </span>
        </div>
        <div :title="author.motto" class="position">
          {{ author.motto }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.sidebar-block {
  position: relative;
  margin-bottom: 1.5rem;
}
.author-block {
  border-radius: 4px;
  padding: 1.667rem;
}
.item {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  /* color: #909090; */
  @apply text-jj-gray-normal;
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
  @apply text-jj-gray-text-normal;
}
</style>
