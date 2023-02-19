<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
const themeColor = computed(() => {
  return color.value === 'dark' ? '#000000' : '#ffffff'
})
if (process.client) {
  const setDark = () => {
    color.preference = color.value = 'dark'
  }
  const setLight = () => {
    color.preference = color.value = 'light'
  }
  // 先获取media
  const media = window.matchMedia('(prefers-color-scheme:dark)')
  // 上面操作只会在页面加载时才会生效，因此，需要给media添加事件监听器
  // MediaQueryList的maches属性会返回媒体查询的结果
  function handleColorChange(e: MediaQueryListEvent) {
    if (e.matches)
      setDark()
    else
      setLight()
  }

  function handleStorageChange(e: StorageEvent) {
    if (e.key === 'nuxt-color-mode' && typeof e.newValue === 'string') {
      if (e.newValue === 'light')
        setLight()
      else if (e.newValue === 'dark')
        setDark()
    }
  }

  onMounted(() => {
    media.addEventListener('change', handleColorChange)
    window.addEventListener('storage', handleStorageChange)
  })
  onUnmounted(() => {
    media.removeEventListener('change', handleColorChange)
    window.removeEventListener('storage', handleStorageChange)
  })
}
// 定义头部元数据
useHead({
  meta: [
    {
      name: 'theme-color',
      content: themeColor.value,
    },
    {
      name: 'msapplication-TileColor',
      content: themeColor.value,
    },
  ],
})
</script>

<template>
  <button class="!outline-none flex lt-md:mr-5" aria-label="Toggle theme" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun text-6 text-black dark:text-[#e8ecfa] opacity-85 hover:opacity-100" />
  </button>
</template>
