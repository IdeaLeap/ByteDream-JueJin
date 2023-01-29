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
}

.gadgets_qrcode_container {
  @apply flex flex-row items-center gap-5
}

.gadgets_txt_container {
  @apply flex flex-col gap-3
}

.gadgets_txt {
  @apply text-black text-lg
}

.gadgets_subtitle {
  @apply text-[#8a919f] text-m
}
</style>
