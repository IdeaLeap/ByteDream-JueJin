<script setup>
const props = defineProps({
  column: Object,
})

const route = useRoute()
const currentId = ref(route.params.id)
const nextArticle = ref({})

let allColumnList
const getNextArticle = () => {
  const currentIndex = allColumnList.findIndex(item => item.id === currentId.value)
  const allColumnListlength = allColumnList.length
  nextArticle.value = allColumnList[(currentIndex + 1) % allColumnListlength]
}

const hasColumn = ref(false)
if (props.column.articles !== undefined) {
  hasColumn.value = true
  allColumnList = props.column.articles.data
  getNextArticle()
}

const isActive = ref(false)
const handleClick = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <nav v-if="hasColumn" class="next-article">
    <div class="next-article-header">
      <div class="next-article-title">
        下一篇
      </div>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" :class="isActive ? 'list-icon active' : 'list-icon'" @click="handleClick">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.00001 2C1.63182 2 1.33334 2.29848 1.33334 2.66667C1.33334 3.03486 1.63182 3.33333 2.00001 3.33333H3.33334C3.70153 3.33333 4.00001 3.03486 4.00001 2.66667C4.00001 2.29848 3.70153 2 3.33334 2H2.00001ZM6.00034 2C5.63215 2 5.33367 2.29848 5.33367 2.66667C5.33367 3.03486 5.63215 3.33333 6.00034 3.33333H14.0003C14.3685 3.33333 14.667 3.03486 14.667 2.66667C14.667 2.29848 14.3685 2 14.0003 2H6.00034ZM6.00034 7.33333C5.63215 7.33333 5.33367 7.63181 5.33367 8C5.33367 8.36819 5.63215 8.66667 6.00034 8.66667H14.0003C14.3685 8.66667 14.667 8.36819 14.667 8C14.667 7.63181 14.3685 7.33333 14.0003 7.33333H6.00034ZM1.33367 8C1.33367 7.63181 1.63215 7.33333 2.00034 7.33333H3.33367C3.70186 7.33333 4.00034 7.63181 4.00034 8C4.00034 8.36819 3.70186 8.66667 3.33367 8.66667H2.00034C1.63215 8.66667 1.33367 8.36819 1.33367 8ZM1.33367 13.3333C1.33367 12.9651 1.63215 12.6667 2.00034 12.6667H3.33367C3.70186 12.6667 4.00034 12.9651 4.00034 13.3333C4.00034 13.7015 3.70186 14 3.33367 14H2.00034C1.63215 14 1.33367 13.7015 1.33367 13.3333ZM6.00034 12.6667C5.63215 12.6667 5.33367 12.9651 5.33367 13.3333C5.33367 13.7015 5.63215 14 6.00034 14H14.0003C14.3685 14 14.667 13.7015 14.667 13.3333C14.667 12.9651 14.3685 12.6667 14.0003 12.6667H6.00034Z"
        />
      </svg>
    </div>
    <hr class="next-article-hr">
    <div class="article-content">
      <a :href="`/article/${nextArticle.id}`" target="_blank" :title="nextArticle.title" class="article"> {{ nextArticle.title }} </a>
    </div>
    <nav v-if="isActive" class="article-list next-article-list">
      <div class="list-title">
        {{ props.column.column }}
      </div>
      <div class="list-body">
        <ul class="list-ul">
          <li v-for="item in allColumnList" :key="item.id" class="list-li">
            <a :href="`/article/${item.id}`" target="_blank" :title="item.title" :class="item.id === currentId ? 'list-item active' : 'list-item'">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </nav>
</template>

<style scoped>
.next-article {
  @apply bg-#fff rd-4px max-h-130px relative bg-jj-sidebar;
}
.next-article-header {
  @apply flex justify-between;
}
.next-article-title {
  @apply fw-500 text-16px c-#1d2129 lh-2rem my-0 mx-1.667rem pt-1.333rem pb-12px text-jj-content;
}
.list-icon {
  @apply inline-block box-content w-16px h-24px py-4px px-6px my-12px mx-10px;
  @apply hover:bg-#f2f3f5 rd-4px cursor-pointer;
  transition: transform 0.5s;
  fill: #000;
}
.list-icon.active {
  fill: #3686ff;
}
.next-article-hr {
  @apply absolute h-1px top-50px left-20px w-20px bg-#e4e6eb border-0;
}
.article-content {
  @apply pb-1.667rem p-0;
}
.article {
  @apply text-14px c-#515767 lh-22px pt-12px px-1.667rem pb-0 overflow-hidden text-ellipsis text-jj-span;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.next-article-list {
  @apply absolute bottom-100% right-17px border-1px border-solid border-jj-border-normal p-0;
  box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
}
.article-list {
  @apply bg-#fff rd-4px w-300px bg-jj-sidebar;
}
.list-title {
  @apply text-16px c-#1d2129 lh-2rem fw-500 my-0 mx-1.667rem pt-20px pb-8px px-0 text-jj-content;
}
.list-body {
  @apply relative max-h-300px w-300px ml--24px overflow-auto pt-0 pr-20px pb-12px pl-0;
}
.list-ul {
  @apply ml-29px;
}
.list-li {
  @apply p-y-8px pr-0 pl-30px;
}
.list-item {
  @apply text-14px c-#515767 fw-400 ml-4px overflow-hidden text-ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.list-li:before {
  @apply absolute left-44px w-4px h-4px mt-7px bg-#1e80ff;
  content: '';
  transform: rotate(45deg);
}
.active {
  color: rgb(0, 127, 255);
}
</style>
