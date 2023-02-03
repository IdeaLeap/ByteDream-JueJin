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
  @apply bg-white dark:bg-jj-article dark:text-white absolute -top-[7rem] left-[-1.67rem] bg-white
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
  position: absolute;
  transform: translate(-50%, 100%);
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top-color:white;
  @apply dark:border-t-jj_bg_gray
}
</style>
