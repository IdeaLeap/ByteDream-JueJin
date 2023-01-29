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
            <div class="linklist_txt">
              {{ i.title }}
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.linklist_container {
  @apply bg-[#ffffff] rounded-sm shadow-[0_2px_2px_0_rgba(0,0,0,0.05)]
}

.linklist_ul {
  @apply flex flex-col gap-3 items-center px-2.5
}

.linklist_link {
  @apply flex flex-row justify-start
  @apply items-center gap-3 hover:bg-[#fbfbfb] p-3
}

.linklist_txt {
  @apply text-lg text-[#333333]
}

.linklist_icon {
  @apply w-12 h-12
}
</style>
