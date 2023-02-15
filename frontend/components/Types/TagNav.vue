<script setup>
const route = useRoute()
const { data: tagList } = await useFetch(`/api/global/tags?type=${route?.params?.type || ''}`)
const isFold = useFold()
const maxLength = 9
</script>

<template>
  <Transition name="fade">
    <nav v-if="tagList.length > 0" class="tag-nav tag-navigator">
      <ul class="nav-list tag-list">
        <li class="nav-items tag">
          <NuxtLink :to="`/${route?.params?.type}`" class="nav-item">
            综合
          </NuxtLink>
        </li>
        <li v-for="(item, index) in tagList" :key="item.id" class="nav-items tag " :class="{ '!hidden': (index >= maxLength && !isFold) }">
          <NuxtLink :to="`/${route?.params?.type}/${item.tag}`" class="nav-item">
            {{ item.alias }}
          </NuxtLink>
        </li>
        <li v-if="!isFold && tagList.length > maxLength" class="nav-items tag unfold" @click="isFold = true">
          展开
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<style scoped>
.tag-list {
    display: flex;
    flex-wrap: wrap;
    height: auto;
}
.nav-list {
    position: relative;
    @apply ml-[1rem];
}
.nav-list .nav-items.tag.router-link-exact-active {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.nav-list .nav-items.tag {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    border-radius: 1rem;
    font-size: 1.1rem;

    margin-right: 1rem;
    margin-bottom: 1rem;
    @apply bg-jj-tag-item text-jj-types-tag-normal;
}
.nav-items {
    position: relative;
    cursor: pointer;
}
.nav-item.router-link-exact-active {
    @apply text-jj-light bg-primary;
}
.nav-item {
    text-decoration: none;
    cursor: pointer;
    padding: 0 .83rem;
    height: 2rem;
    border-radius: 1rem;
    @apply text-jj-gray-normal f-c-c;
}
.nav-list .nav-items.unfold {
    padding-right: 2rem;
    padding-left: 1rem;
}
.nav-list .nav-items.unfold:after {
    position: absolute;
    right: 8px;
    bottom: 35%;
    content: "";
    height: 5px;
    width: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    @apply border-t-5 border-t-jj-types-tag-normal;
}
</style>
