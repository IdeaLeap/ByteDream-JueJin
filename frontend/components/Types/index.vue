<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { data: typeList } = await useFetch('/api/global/types')
const isNavShown = inject('isNavShown')
</script>

<template>
  <div class="view-types" :class="{ 'nav-shown': !isNavShown }">
    <div class="type-list">
      <NuxtLink class="type-list-item" to="/">
        综合
      </NuxtLink>
      <div v-for="item in typeList" :key="item.type" class="list-item-wrapper">
        <NuxtLink class="type-list-item" :to="`/${item.type}`" :class="{ 'router-link-exact-active': route?.params?.type === item.type }">
          {{ item.alias }}
        </NuxtLink>
        <div v-if="item.tags.data.length > 0" class="category-popover">
          <nav class="tag-nav">
            <ul class="tag-list">
              <li v-for="item_ in item.tags.data" :key="item_.id" class="tag">
                <NuxtLink :to="`/${item.type}/${item_.tag}`">
                  {{ item_.alias }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- <span class="type-manage type-list-item">标签管理</span> -->
    </div>
  </div>
</template>

<style scoped>
.nav-shown{
  transform: translate3d(0,-5rem,0) !important;
}
@media (max-width: 640px) {
  .nav-shown{
  transform: translate3d(0,-4.333rem,0) !important;
  }
}
@media (max-width: 960px){
  .type-list-item:first-child {
      @apply pl-[1.5rem];
  }
  .type-list-item:last-child {
      @apply pr-[1.5rem];
  }
}
.view-types {
  transition: all .2s;
  transform: translateZ(0);
  @apply bg-jj_navigation w-full fixed top-[5rem] lt-sm:(top-[4.333rem]) shadow-sm shadow-black/5 dark:shadow-white/5 h-[3.833rem] z-1;
}
.type-list-item{
  @apply h-full w-auto float-left cursor-pointer whitespace-nowrap flex items-center p-x-[1rem] color-[#71777c] text-[1.16rem];
  @apply cursor-pointer;
}
.type-list-item:hover{
  color: #1e80ff;
}

.type-list{
  line-height: 1;
  @apply list-none ma max-w-[960px] h-full;
  @apply overflow-x-auto flex items-center;
  @apply relative;
}

.type-list::-webkit-scrollbar {
        height: 0;
}

.type-list-item.router-link-exact-active {
    @apply opacity-100 text-primary;
}

.type-manage{
  @apply absolute right-0 top-0;
}
.list-item-wrapper{
  @apply relative;
}
.type-list-item:hover+.category-popover{
  @apply scale-100;
}
.category-popover:hover{
  @apply scale-100;
}
.category-popover {
  @apply scale-0 transition-100 delay-150 transition-all;
  position: fixed;
  top: 3.833rem;
  padding: 1.17rem 1.17rem .17rem;
  max-height: 16.67rem;
  font-weight: 400;
  line-height: 1.2;
  background-color: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 15%);
  box-sizing: border-box;
  border-radius: 2px;
  cursor: default;
  z-index: 250;
}
.tag-list {
    display: flex;
    flex-wrap: wrap;
}
.tag {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    background-color: #f4f5f5;
    border-radius: 1rem;
    font-size: 1.1rem;
    color: #71777d;
    padding: 0 .83rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
}
.tag:hover{
  @apply text-link;
}
</style>
