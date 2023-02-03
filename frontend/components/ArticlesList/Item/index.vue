<script setup lang="ts">
const { uid } = defineProps({
  uid: String,
  title: String,
  viewed: Number,
  liked: Number,
  commented: Number,
  summary: String,
  cover: String,
  createdAt: {
    type: String,
    required: true,
  },
  name: String,
  tags: Array,
  index: Number,
})
const hideHandler = () => {
  const lis = document.getElementById(`artlist_${uid}`)
  if (lis === null)
    return
  lis.style.display = 'none'
}
</script>

<template>
  <li :id="`artlist_${uid}`" class="list_container">
    <NuxtLink :to="`article/${uid}`" class="link_container">
      <div class="left">
        <ArticlesListItemTopbar
          :name="name"
          :duration="formatTime(createdAt)"
          :tags="tags"
        />
        <ArticlesListItemMainbar :title="title" :summary="summary" />
        <ArticlesListItemBottombar :viewed="viewed" :liked="liked" :commented="commented" />
      </div>
      <ArticlesListItemImg :cover="cover" :summary="summary" />
    </NuxtLink>
    <div
      class="icon"
      @click="hideHandler"
    />
  </li>
</template>

<style scoped>
.list_container {
  @apply relative
}
.list_container:hover .icon {
  @apply block
}
.left {
  @apply flex-1 truncate
}
.link_container {

  @apply  transition dark:b-[#333] hover:bg-jj-hover f-c-c py-4 transition-all b-b b-grey all-cursor-pointer flex-1 pl-[1.67rem] truncate
}

.icon {
  @apply i-carbon-close display-none cursor-pointer text-[16px] text-[#C9CDD4] hover:text-[#1E80FF] transition absolute top-[1rem] right-[1.67rem]
}
</style>
