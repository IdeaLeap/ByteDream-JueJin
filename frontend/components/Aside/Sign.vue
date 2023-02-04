<script setup lang="ts">
let day_parts = ref('')
if (process.server)
  day_parts = useDayParts()
const is_sign = ref(false)
const sign = () => {
  is_sign.value = true
  document.querySelector('.sign_btn')?.classList.add('sign_btn_signed')
  document.querySelector('.sign_btn_signed')?.classList.remove('sign_btn')
}
</script>

<template>
  <div>
    <div class="sign_container">
      <div class="sign_container_container">
        <div class="sign_text_container">
          <span v-if="is_sign" class="sign_dayparts">
            连续签到
            <span>1天</span>
          </span>
          <span v-else class="sign_dayparts">{{ day_parts }}</span>
          <div class="sign_txt">
            点亮在社区的每一天
          </div>
        </div>
        <div>
          <button
            class="sign_btn"
            @click="sign()"
          >
            <span v-if="is_sign" class="sign_btn_txt_signed">已签到</span>
            <span v-else class="sign_btn_txt">去签到</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sign_container {
  @apply bg-jj_font_white p-5 py-6
  @apply dark:bg-jj_bg_gray
}

.sign_container_container {
  @apply flex flex-row gap-4 items-center
}

.sign_text_container {
  @apply flex flex-col gap-1
}

.sign_dayparts{
  @apply text-black font-bold text-2xl
  @apply dark:text-jj_font_white
}

.sign_txt {
  @apply text-[#8a919f] text-lg
}

.sign_btn {
  @apply bg-[#f4f9ff] border-[#8dbfff] hover:bg-[#e8f2ff] border-solid border-1 rounded-2 h-13
  @apply dark:bg-[#171d23] dark:border-[#2F5D99] dark:hover:bg-[#315078] select-none
}

.sign_btn_txt {
  @apply text-lg text-[#1e80ff] px-5 py-1
  @apply dark:text-[#388EFF]
}

.sign_btn_txt_signed{
  @apply text-lg text-[#abcdff] px-5 py-1
  @apply dark:text-[#85BAFF]
}

.sign_btn_signed{
  @apply bg-[#f4f9ff] border-[#b3d5ff] border-solid border-1 rounded-2 h-13
  @apply dark:bg-[#315078] dark:border-[#2F5D99]
}

.sign_dayparts > span {
  @apply text-[#1e80ff]
  @apply dark:text-[#6BABFF]
}
</style>
