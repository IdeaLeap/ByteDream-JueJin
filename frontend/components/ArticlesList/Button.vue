<script lang="ts" setup>
defineProps({
  plain: Boolean,
})
</script>

<template>
  <div :class="plain ? 'plain_button primary_button' : 'primary_button'">
    <slot />
  </div>
</template>

<style scoped>
.primary_button {
  transition: background-color .1s linear .05s;
  @apply px-[4rem] py-[0.5rem] m-[1rem] text-[1.167rem] text-white rounded h-full bg-jj-brand-normal rounded-[3px]
}
.plain_button {
  @apply text-[#2885FF] bg-[#F4F9FF]
}
.primary_button:hover {
  @apply bg-[#388EFF]
}
.plain_button:hover {
  @apply bg-[#E8F2FF]
}
</style>
