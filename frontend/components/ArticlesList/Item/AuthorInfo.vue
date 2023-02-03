<script setup lang="ts">
defineProps({
  name: String,
  duration: String,
})
</script>

<template>
  <div class="author_panel">
    <div class="author">
      <nuxt-img
        src="/og-image.png" :alt="name" loading="lazy" width="50" height="50" fit="fill" quality="80"
        format="webp" class="rounded-full"
      />
      <div class="info">
        <div>{{ name }}</div>
        <div class="text-jj_thirdly">
          {{ duration }}
        </div>
      </div>
    </div>
    <div class="btn_group">
      <ArticlesListButton>关注</ArticlesListButton>
      <ArticlesListButton plain>
        私信
      </ArticlesListButton>
    </div>
  </div>
</template>

<style scoped>
.author_panel {
  box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
  @apply bg-white absolute top-[-9.5rem] left-0 mlg:left-[-1.67rem]
  @apply dark:shadow-jj_author_info dark:bg-jj-article dark:text-white
}
.author {
  @apply flex m-[1rem] mb-0
}
.author .info {
  @apply pl-[1rem] flex flex-col justify-center
}
.btn_group {
  @apply f-c-c
}
.author_panel::after {
  content: '';
  transform: translate(-50%, 100%);
  border: 10px solid transparent;
  border-top-color: white;
  @apply border-t-white absolute bottom-0 left-1/2 w-0 h-0
  @apply dark:border-t-jj_bg_gray
}
</style>
