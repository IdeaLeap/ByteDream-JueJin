<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

if (process.client) {
  const item = localStorage.getItem('nuxt-color-mode') || 'dark'
  localStorage.setItem('nuxt-color-mode', item)
  const setDark = () => {
    color.preference = color.value = 'dark'
  }
  const setLight = () => {
    color.preference = color.value = 'light'
  }
  const setItem = () => {
    color.preference = color.value = item
  }
  // 先获取media
  const media = window.matchMedia('(prefers-color-scheme:dark)')
  // 判断是否为暗主题
  if (media.matches)
  // 如果是暗色主题则使用localStorage储存的上次使用的主题颜色
    setItem()

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
</script>

<template>
  <button class="!outline-none flex lt-md:mr-5" aria-label="Toggle theme" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun text-6 text-black dark:text-[#e8ecfa] opacity-85 hover:opacity-100" />
  </button>
</template>
