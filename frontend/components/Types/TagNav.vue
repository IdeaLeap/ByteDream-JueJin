<script setup>
const routeData = usePath(useRoute())
const { data: tagList } = await useFetch(`/api/global/tags?type=${routeData.type}`)
const isFold = useFold(false)
const maxLength = 9
</script>

<template>
  <Transition name="fade">
    <nav v-if="tagList.length > 0" class="tag-nav tag-navigator">
      <ul class="nav-list tag-list">
        <li class="nav-items tag active">
          <NuxtLink :to="`/${routeData.type}`" class="nav-item">
            综合
          </NuxtLink>
        </li>
        <li v-for="(item, index) in tagList" :key="item.id" class="nav-items tag " :class="{ '!hidden': (index >= maxLength && !isFold) }">
          <NuxtLink :to="`/${routeData.type}/${item.tag}`" class="nav-item">
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
}
.nav-list .nav-items.tag:has(.router-link-exact-active) {
    background-color: #007fff;
    color: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.nav-list .nav-items.tag {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    background-color: #fff;
    border-radius: 1rem;
    font-size: 1.1rem;
    color: #8a9aa9;
    padding: 0 .83rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
}
.nav-items {
    position: relative;
    cursor: pointer;
}
.nav-item.router-link-exact-active {
    color: #fff;
}
.nav-item {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
}
.nav-list .nav-items.unfold {
    padding-right: 2rem;
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
    border-top: 5px solid #8a9aa9;
}
</style>
