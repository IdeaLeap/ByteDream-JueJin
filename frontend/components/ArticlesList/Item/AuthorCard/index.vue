<script setup lang="ts">
defineProps<{
  name: string
  motto: string
  avatar: string
  rank: number
}>()
</script>

<template>
  <div class="author_card">
    <div class="about">
      <ArticlesListUiImg :src="avatar" :alt="name" avatar />
      <div class="info">
        <div class="name">
          <span>{{ name }}</span>
          <img :src="`https://pan.marlene.top/d/share/jj/${rank}.png`" alt="等级">
        </div>
        <div class="text-[#8f969c]">
          {{ motto }}
        </div>
      </div>
    </div>
    <ArticlesListUiBtns />
  </div>
</template>

<style scoped>
.author_card {
  box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
  @apply bg-white absolute top-[-10rem] left-0 mlg:left-[-1.67rem]
  @apply dark:bg-jj-article dark:text-white
}
.about {
  @apply flex items-center m-[1rem] mb-0
}
.about .info {
  @apply pl-[1rem] flex flex-col justify-center
}
.name {
  @apply text-[1rem] flex items-center
}
.name img {
  @apply w-[3rem] m-l-[1rem]
}
.author_card::after {
  border: 10px solid transparent;
  border-top-color: white;
  @apply w-0 h-0
  @apply absolute bottom-0 left-1/2 content-none -translate-x-1/2 translate-y-full
  @apply dark:border-t-jj_bg_gray
}
</style>
