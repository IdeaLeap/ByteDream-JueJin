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
          <div i-carbon-close class="ad_close group-hover:opacity-50" @click="turn_off(parseInt(index))" />
          <div class="txt_container">
            <div class="txt">
              广告
            </div>
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
  @apply my-2 mx-1 absolute
  @apply text-jj_thirdly opacity-0 text-[1.5rem]
  @apply font-[1500] hover:opacity-100
}

.txt_container {
  @apply absolute translate-y-[14.3rem] translate-x-[-0.7rem]
  @apply cursor-pointer select-none
}

.txt {
  @apply text-jj_font_white px-1.5 bg-[rgba(0,0,0,.2)]
  @apply rounded-md border-white border-1
}
</style>
