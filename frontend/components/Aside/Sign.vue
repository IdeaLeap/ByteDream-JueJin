<script setup lang="ts">
let day_parts = ref('')
if (process.client)
  day_parts = useDayParts()
const is_sign = ref(false)
const sign = () => {
  is_sign.value = true
  document.querySelector('.sign_btn')?.classList.remove('unSigned')
}
</script>

<template>
  <div class="sign_container">
    <div class="sign_container_container">
      <div class="sign_text_container">
        <span v-if="is_sign" class="sign_dayparts">
          连续签到
          <span>1天</span>
        </span>
        <span v-else class="sign_dayparts">{{ day_parts }}</span>
        <div class="sign_txt" style="font-size: 12px;">
          <!-- fontSize写在class中在Safari上有明显抖动 -->
          点亮在社区的每一天
        </div>
      </div>
      <button class="sign_btn unSigned" @click="sign">
        <span v-if="is_sign" class="sign_btn_txt_signed">已签到</span>
        <span v-else class="sign_btn_txt">去签到</span>
      </button>
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
  @apply flex flex-col gap-1 ml-2
}

.sign_dayparts {
  @apply text-black font-bold text-2xl
  @apply dark:text-jj_font_white
}

.sign_txt {
  @apply text-jj-font-entry-normal;
}

.sign_btn {
  @apply bg-jj-button-sign-normal border-jj-border-sign-normal h-36px w-74px box-border
  @apply flex items-center justify-center flex-row border-solid border-1 rounded-2  select-none
}
.unSigned{
  @apply hover:bg-jj-border-hover-normal;
}

.sign_btn_txt {
  @apply text-size-14px text-jj-button-text-normal;
  white-space: nowrap;
}

.sign_btn_txt_signed {
  @apply text-size-14px text-jj-signed-normal;
  white-space: nowrap;
}

.sign_dayparts > span {
  @apply text-jj-signed-dayparts-normal;
}
</style>
