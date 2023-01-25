<script setup lang="ts">
defineProps({
  gadgets: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div display="block" class="bg-light-50 p-5">
    <nuxt-link class="" :href="gadgets.url">
      <div class="flex flex-row items-center gap-4">
        <div class="items-end">
          <nuxt-img
            :src="gadgets.qrcode"
            alt="QRcode"
            loading="lazy"
            class="max-h-15 max-w-15"
          />
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-black text-lg">{{ gadgets.title }}</span>
          <div class="text-[#8a919f] text-m">
            {{ gadgets.subtitle }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped></style>
