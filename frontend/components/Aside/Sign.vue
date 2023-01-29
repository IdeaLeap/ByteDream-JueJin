<script setup lang="ts">
let day_parts = ref('')
if (process.server)
  day_parts = useDayParts()
</script>

<template>
  <div>
    <div class="sign_container">
      <div class="sign_container_container">
        <div class="sign_text_container">
          <span class="sign_dayparts">{{ day_parts }}</span>
          <div class="sign_txt">
            点亮在社区的每一天
          </div>
        </div>
        <div>
          <button
            class="sign_btn"
          >
            <span class="sign_btn_txt">去签到</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sign_container {
  @apply bg-light-50 p-5 py-6
}

.sign_container_container {
  @apply flex flex-row gap-4 items-center
}

.sign_text_container {
  @apply flex flex-col gap-1
}

.sign_dayparts{
  @apply text-black font-bold text-2xl
}

.sign_txt {
  @apply text-[#8a919f] text-lg
}

.sign_btn {
  @apply bg-[#f4f9ff] border-[#8dbfff] hover:bg-[#e8f2ff] border-solid border-1 rounded-2 h-13
}

.sign_btn_txt {
  @apply text-lg text-[#1e80ff] px-5 py-1
}
</style>
