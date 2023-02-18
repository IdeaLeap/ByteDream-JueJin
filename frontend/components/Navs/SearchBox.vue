<script setup>
const isActive = ref(false)
const keyword = ref('')
const searchData = ref('')

const handleClick = () => {
  isActive.value = true
}
const handleClickOutside = (e) => {
  if (!e.target.closest('.search-active'))
    isActive.value = false
}
const handleClickLink = () => {
  keyword.value = ''
  searchData.value = ''
  isActive.value = false
}
const searchInput = useDebounceFn(async () => {
  if (keyword.value !== '') {
    const { data: SearchData_ } = await useFetch(
      `/api/global/search?keyword=${keyword}`,
    )
    searchData.value = SearchData_.value
  }
  else {
    searchData.value = ''
  }
}, 100)
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="h-full f-c-c">
    <div
      class="search-box"
      :class="{ 'search-active': isActive }"
      @click="handleClick"
    >
      <input
        v-model="keyword"
        class="search-input active isResourceVisible"
        type="search"
        maxlength="32"
        placeholder="搜索"
        @input="searchInput"
      >
      <div class="search-icon" :class="{ 'search-active': isActive }">
        <div class="i-carbon-search" />
      </div>
      <div v-if="!!searchData.hits" class="search-result">
        <div class="result-title">
          共查到{{ searchData.estimatedTotalHits }}条结果
        </div>
        <div class="result-list">
          <NuxtLink
            v-for="item in searchData.hits"
            :key="item.id"
            class="result-item"
            :to="`/article/${item.id}`"
            @click="handleClickLink"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-box {
  @apply relative flex bg-jj-navs-search-bg;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  position: relative;
  height: 2.834rem;
  border: 1px solid #c2c8d1;
  transition: width 0.2s;
}
.search-box.search-active {
  border: 1px solid #1e80ff;
}
.search-input {
  border: none;
  width: calc(100% - 44px);
  padding: 0.6rem 0 0.6rem 1rem;
  box-shadow: none;
  outline: none;
  font-size: 1.1rem;
  color: #8a919f;
  background-color: transparent;
  transition: width 0.3s;
}
[type="search"] {
  appearance: textfield;
  outline-offset: -2px;
}
.search-icon {
  position: relative;
  border-radius: 2px;
  @apply f-c-c text-1.2rem text-gray h-full w-3rem bg-jj-navs-search-icon;
}
.search-icon.search-active {
  @apply bg-[#eaf2ff] text-blue;
}
.search-result {
  width: 100%;
  position: absolute;
  top: 105%;
  line-height: 2rem;
  left: 0;
  z-index: 1000;
  min-width: 6rem;
  font-size: 1rem;
  color: #869aab;
  list-style: none;
  text-align: left;
  border-radius: 0.17rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border: 1px solid;
  @apply bg-jj-navs-search-list border-jj-navs-search-border;
}
.result-title {
  border-bottom: 1px solid;
  @apply border-jj-navs-search-border;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
}
.result-list {
  cursor: pointer;
  @apply text-jj-navs-search-text;
}
.result-item {
  padding: 0.5rem 1rem;
  @apply text-ellipsis truncate block;
}
.result-item:hover {
  @apply bg-jj-navs-search-hover;
}
</style>
