<script setup lang="ts">
defineProps({
  gadgets: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="gadgets_container">
    <nuxt-link :href="gadgets.url">
      <div class="gadgets_qrcode_container">
        <div class="items-end">
          <nuxt-img
            :src="gadgets.qrcode"
            alt="QRcode"
            loading="lazy"
            class="max-h-15 max-w-15"
            width="50"
            height="50"
          />
        </div>
        <div class="gadgets_txt_container">
          <span class="gadgets_txt">{{ gadgets.title }}</span>
          <div class="gadgets_subtitle">
            {{ gadgets.subtitle }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.gadgets_container {
  @apply block
  @apply bg-light-50 p-4 rounded-sm
  @apply shadow-[0_2px_2px_0_rgba(0,0,0,0.05)]
  @apply dark:bg-jj_bg_gray
}

.gadgets_qrcode_container {
  @apply flex flex-row items-center gap-5
}

.gadgets_txt_container {
  @apply flex flex-col gap-3
}

.gadgets_txt {
  @apply text-jj_font_dark text-lg
  @apply dark:text-jj_font_white
}

.gadgets_subtitle {
  @apply text-jj_thirdly text-m
}
</style>
