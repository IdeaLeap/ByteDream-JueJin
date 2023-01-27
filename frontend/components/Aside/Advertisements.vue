<script setup lang="ts">
defineProps({
  ads: {
    type: Object,
    required: true,
  },
})
const is_show = ref(true)
const turn_off = () => {
  is_show.value = false
}
</script>

<template>
  <div v-if="is_show">
    <div v-for="i in ads" :key="i.img">
      <div>
        <div class="flex flex-row justify-end gap-2 group">
          <nuxt-img class="mb-5 rounded-sm shadow-[0_2px_2px_0_rgba(0,0,0,0.05)] " :src="i.img" />
          <div i-carbon-close class="my-2 mx-1 absolute text-[#909090] opacity-50 text-[1.5rem] font-[1500] opacity-0 group-hover:opacity-100" @click="turn_off" />
        </div>
        <div class="font-[20px]">
          <div class="absolute translate-y-[-3.5rem] translate-x-[16.5rem] text-light-50 px-1.5 bg-[rgba(0,0,0,.2)] rounded-md border-white border-1">
            广告
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
