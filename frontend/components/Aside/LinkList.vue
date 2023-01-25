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
  <div display="block" class="">
    <div class="bg-[#ffffff]">
      <ul class=" flex-col gap-3 items-center flex">
        <li v-for="i in links" :key="i.url" class="h-[100%] w-[100%]">
          <nuxt-link
            :to="i.url"
            class="flex flex-row justify-start items-center gap-3 hover:bg-[#fbfbfb] p-3"
          >
            <nuxt-img :src="i.icon" class="w-12 h-12" />
            <div class="text-lg text-[#333333]">
              {{ i.title }}
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
