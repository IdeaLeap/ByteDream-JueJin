<script setup lang="ts">
defineProps<{
  commented: Number
  liked: Number
}>()
const isLiked = ref(false)
const route = useRoute()
const url = ref(`/api/articles/update/like?id=${route.params.id}`)
const newLike = ref(0)
const handleLike = async () => {
  if (!isLiked.value) {
    const { data } = await useFetch(url)
    if (data.value.code === 200) {
      isLiked.value = true
      newLike.value = data.value.data.liked
    }
    else {
      isLiked.value = false
    }
  }
}

const { immerseState, immerseToggle } = useImmerse()
</script>

<template>
  <div class="article-suspended-panel article-suspended-panel hidden lg:block">
    <ArticlesContentSideBarLeftSvg />
    <div v-show="!immerseState" :badge="newLike === 0 ? liked : newLike" class="panel-btn with-badge" :class="isLiked ? 'active' : ''" @click="handleLike">
      <svg class="sprite-icon icon-zan"><use xlink:href="#icon-zan" /></svg>
    </div>
    <div v-show="!immerseState" :badge="commented" class="panel-btn with-badge">
      <svg class="sprite-icon icon-comment"><use xlink:href="#icon-comment" /></svg>
    </div>
    <div v-show="!immerseState" class="panel-btn">
      <svg class="sprite-icon icon-collect"><use xlink:href="#icon-collect" /></svg>
      <div class="collect-popover" />
    </div>
    <div v-show="!immerseState" class="share-btn panel-btn">
      <svg class="sprite-icon icon-share"><use xlink:href="#icon-share" /></svg>
    </div>
    <div v-show="!immerseState" class="divider" />
    <div v-show="!immerseState" class="panel-btn">
      <svg class="sprite-icon icon-report"><use xlink:href="#icon-report" /></svg>
    </div>
    <span class="tooltip">
      <span class="tooltiptext">沉浸阅读</span>
      <span class="byte-tooltip__wrapper"><div class="panel-btn block" :class="immerseState ? 'active ' : ''" @click="immerseToggle">
        <svg class="sprite-icon icon-immerse"><use xlink:href="#icon-immerse" /></svg></div></span>
    </span>
  </div>
</template>

<style scoped>
.article-suspended-panel {
  @apply fixed top-140px ml--7rem z-2;
}
.panel-btn.with-badge:after {
  @apply absolute top-0 left-75% h-17px lh-17px px-5px rd-9px text-11px text-center whitespace-nowrap bg-jj-gray-panel-normal text-jj_font_white;
  content: attr(badge);
}
.panel-btn {
  @apply relative mb-1.667rem w-4rem h-4rem bg-jj_font_white bg-center bg-no-repeat rd-50%  cursor-pointer text-center text-size-1.67rem;
  background-position: 50%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
}
.divider {
  @apply w-32px h-1px bg-jj-gray-divider-normal mx-auto mb-1.667rem;
}
.panel-btn .sprite-icon {
  @apply c-jj-font-entry-normal h-100%;
  @apply hover:c-jj-gray-text-normal;
}
.sprite-icon {
  @apply w-1em h-1em fill-current vertical-middle;
  transition: all 0.15s linear;
}
svg {
  display: inline;
}
.panel-btn:not(.share-btn).active .sprite-icon {
  @apply text-jj-blue-normal;
}
.panel-btn:not(.share-btn).active.with-badge:after {
  @apply bg-jj-blue-normal;
}
.tooltip {
  @apply relative inline-block;
}
.tooltip .tooltiptext {
  @apply absolute z-1 bottom-113% ml--25% w-70px h-45px lh-45px  text-#fff text-center rd-6px opacity-0 invisible bg-jj-black-tooltip-normal;
  transition: visibility 0s linear 0.3s, opacity 0.3s linear;
}
.tooltip:hover .tooltiptext {
  @apply opacity-100 visible;
  transition-delay: 0.3s;
}
.tooltiptext::after {
  @apply absolute top-100% left-50%  ml--5px b-5px  border-solid;
  content: '';
  border-color: black transparent transparent transparent;
}
</style>
