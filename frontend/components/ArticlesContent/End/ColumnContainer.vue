<script setup lang="ts">
import type { IColumn } from '@/types/IArticle'
defineProps<{
  column: Array<IColumn>
}>()
const { immerseState } = useImmerse()

const btns = ref<HTMLElement>()
const words = ref<HTMLElement>()
const loadings = ref<HTMLElement>()

const handleClick = async (i: any) => {
  // 模拟关注
  const btn = btns.value![i]
  const isFollow = btn.getAttribute('data-isfollow')
  const loading = loadings.value![i]
  const word = words.value![i]
  loading!.style.borderTopColor = isFollow ? '#007fff' : 'transparent'
  loading.style.display = 'block'
  word!.innerText = ''
  await new Promise(resolve => setTimeout(resolve, 200))
  loading.style.display = 'none'
  btn.setAttribute('data-isfollow', Number(!Number(isFollow)))
  btn.classList.toggle('cancel')
  btn.classList.toggle('primary')
  word!.innerText = Number(isFollow) ? '关注专栏' : '已关注'
}
</script>

<template>
  <div v-show="!immerseState" class="column-container">
    <div class="column-header">
      <span class="column-title">文章被收录于专栏：</span>
    </div>
    <div v-for="(item, i) in column" :key="i" class="column-content">
      <div class="item-container">
        <nuxt-img format="webp" loading="eager" fon :src="item.cover" alt="cover" class="lazy" />
        <div class="content">
          <div class="title">
            {{ item.column }}
          </div>
          <span class="tooltip">
            <span class="tooltiptext">{{ item.describe }}</span>
            <span class="byte-tooltip__wrapper">
              <span class="description"> {{ item.describe }} </span>
            </span></span>
        </div>
        <button ref="btns" data-isfollow="0" class="btn primary" @click="handleClick(i)">
          <span ref="words">关注专栏</span>
          <span ref="loadings" class="loading" style="display: none" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column-container {
  @apply mt-40px relative bg-#f7f8fa p-1.333rem rounded-4px;
}
.column-container .column-header .column-title {
  @apply c-#515767 fw-400 text-14px lh-22px;
}
.column-container .column-content {
  @apply max-h-258px mt-16px;
  /* overflow-hidden  */
}
.item-container {
  @apply flex items-center relative w-100% box-border;
}
.item-container img {
  @apply w-80px h-60px rd-4px;
}
.lazy {
  @apply relative object-cover;
}

.lazy:not(.immediate):before {
  transition: opacity 0.2s;
}
.lazy:before {
  @apply absolute top-0 left-0 right-0 bottom-0 bg-inherit rd-inherit;
  content: '';
}
.item-container .content {
  margin: 0 16px;
  width: calc(100% - 216px);
}
.item-container .title {
  @apply c-#252933 text-16px mb-4px lh-2rem fw-500 truncate;
}
.item-container .tooltip {
  @apply w-100% relative inline-block;
}
.item-container .tooltip .byte-tooltip__wrapper {
  @apply w-100% inline-block truncate;
}
.item-container .description {
  @apply c-#8a919f text-14px lh-22px truncate;
}

.item-container .btn {
  @apply text-14px lh-34px rd-4px w-60px h-34px ml-auto f-c-c py-0 px-43px whitespace-nowrap border-1px;
  transition: all 0.3s;
}
.primary {
  @apply c-#fff bg-#1d7dfa hover:bg-#388eff;
}
.cancel {
  @apply bg-jj_bg c-jj-font-entry-normal border-solid border-1px border-#1d7dfa;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading {
  @apply inline-block w-16px h-16px border-3px border-solid border-currentColor rd-50% absolute;
  animation: spin 1s linear infinite;
}

.tooltip .tooltiptext {
  @apply absolute z-1 bottom-113% h-45px lh-45px  px-14px text-#fff text-center rd-6px opacity-0 invisible bg-jj-black-tooltip-normal text-ellipsis;
  white-space: nowrap;
  transition: visibility 0s linear 0.3s, opacity 0.3s linear;
}
.tooltip:hover .tooltiptext {
  @apply opacity-100 visible;
  transition-delay: 0.3s;
}
.tooltiptext::after {
  @apply absolute top-100% left-50%  ml--5px b-5px;
  content: '';
  border-color: black transparent transparent transparent;
}
</style>
