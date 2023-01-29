<script setup lang="ts">
const props = defineProps({
  ads: {
    type: Object,
    required: true,
  },
})
const is_show_list = reactive({ ...Array<Boolean> })
for (let i = 0; i < props.ads.length; i++)
  is_show_list[i] = true
const turn_off = (i: number) => {
  is_show_list[i] = false
}
</script>

<template>
  <div>
    <div v-for="(i, index) in ads" :key="i.img">
      <div v-if="is_show_list[index]">
        <div class="ad_container group">
          <nuxt-img class="ad" :src="i.img" />
          <div i-carbon-close class="ad_close group-hover:opacity-100" @click="turn_off(parseInt(index))" />
        </div>
        <div class="txt_container">
          <div class="txt">
            广告
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ad_container {
  @apply flex flex-row justify-end gap-2
}

.ad {
  @apply mb-5 rounded-sm shadow-[0_2px_2px_0_rgba(0,0,0,0.05)]
}

.ad_close {
  @apply my-2 mx-1 absolute text-[#909090]
  @apply opacity-50 text-[1.5rem] font-[1500]
  @apply opacity-0
}

.txt_container {
  @apply font-[20px]
}

.txt {
  @apply absolute translate-y-[-3.5rem] translate-x-[16.5rem]
  @apply text-light-50 px-1.5 bg-[rgba(0,0,0,.2)]
  @apply rounded-md border-white border-1
}
</style>
