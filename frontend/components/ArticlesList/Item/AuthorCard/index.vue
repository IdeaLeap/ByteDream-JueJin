<script setup lang="ts">
defineProps<{
  name: string
  motto: string
  avatar: string
  rank: number
}>()
</script>

<template>
  <div class="author_card truncate">
    <div class="about">
      <ArticlesListUiImg :src="avatar" :alt="name" avatar />
      <div class="ml-[0.5rem]">
        <div class="name">
          <span>{{ name }}</span>
          <img class="w-[3rem] ml-[0.75rem]" :src="`https://picxyxsw.oss-cn-hangzhou.aliyuncs.com/${rank}.png`" :alt="`lv${rank}`">
        </div>
        <div class="text-[#8f969c] text-[12px]">
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
  @apply px-[1rem] bg-white absolute top-[-9rem] left-0 mlg:left-[-1.67rem]
  @apply dark:(bg-jj-article text-white)
}
.about {
  @apply flex items-center my-[0.75rem] mb-0 min-w-[250px]
}
.name {
  @apply flex items-center pr-[1rem]
}
.author_card::after {
  border: 10px solid transparent;
  border-top-color: white;
  @apply w-0 h-0
  @apply absolute bottom-0 left-1/2 content-none -translate-x-1/2 translate-y-full
  @apply dark:border-t-jj_bg_gray
}
</style>
