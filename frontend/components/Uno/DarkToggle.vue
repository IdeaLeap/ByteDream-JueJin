<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none flex lt-md:mr-5" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun text-6 text-black dark:text-[#e8ecfa] opacity-85 hover:opacity-100" />
  </button>
</template>
