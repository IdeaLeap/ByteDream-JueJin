<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none flex" @click="toggleDark">
    <span>切换主题</span>
    <div class="dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
