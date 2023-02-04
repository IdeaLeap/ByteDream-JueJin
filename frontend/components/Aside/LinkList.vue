<script setup lang="ts">
import type { ILink } from 'types/ILink'
defineProps({
  links: {
    type: Array<ILink>,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="linklist_container">
      <ul class="linklist_ul">
        <li v-for="i in links" :key="i.url" class="h-[100%] w-[100%]">
          <nuxt-link
            :to="i.url"
            class="linklist_link"
          >
            <nuxt-img :src="i.icon" class="linklist_icon" />
            <span class="linklist_txt">
              {{ i.title }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.linklist_container {
  @apply bg-jj_font_white rounded-sm shadow-[0_2px_2px_0_rgba(0,0,0,0.05)]
  @apply dark:bg-jj_bg_gray
}

.linklist_ul {
  @apply flex flex-col gap-3 items-center
}

.linklist_link {
  @apply flex flex-row justify-start
  @apply items-center gap-3 hover:bg-[#fbfbfb] p-3
  @apply hover:bg-jj-hover
}

.linklist_txt {
  @apply text-lg text-jj_font_black
  @apply dark:text-jj_font_white
}

.linklist_icon {
  @apply w-12 h-12 mr-2 ml-2
}
</style>
