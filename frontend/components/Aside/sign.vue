<script setup lang="ts">
const hours = useDateFormat(useNow(), 'HH')
const state = ref('')
if (parseInt(hours.value) >= 0 && parseInt(hours.value) <= 11)
  state.value = '早上好!'
else if (parseInt(hours.value) > 11 && parseInt(hours.value) <= 14)
  state.value = '中午好!'
else if (parseInt(hours.value) > 14 && parseInt(hours.value) <= 18)
  state.value = '下午好!'
else if (parseInt(hours.value) > 18 && parseInt(hours.value) <= 24)
  state.value = '晚上好!'
</script>

<template>
  <div display="block" class="">
    <div class="bg-light-50 p-5 py-6">
      <div class="flex flex-row gap-3 items-center">
        <div class="flex flex-col gap-1">
          <span class="text-black font-bold text-2xl">{{ state }}</span>
          <div class="text-[#8a919f] text-lg">
            点亮在社区的每一天
          </div>
        </div>
        <div>
          <button class="bg-[#f4f9ff] border-[#8dbfff] hover:bg-[#e8f2ff] border-solid border-1 rounded-2 h-13">
            <span class="text-lg text-[#1e80ff] px-5 py-1">去签到</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
