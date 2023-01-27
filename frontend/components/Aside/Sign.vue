<script setup lang="ts">
let day_parts = ref('')
if (process.server)
  day_parts = useDayParts()
</script>

<template>
  <div display="block">
    <div class="bg-light-50 p-5 py-6">
      <div class="flex flex-row gap-4 items-center">
        <div class="flex flex-col gap-1">
          <span class="text-black font-bold text-2xl">{{ day_parts }}</span>
          <div class="text-[#8a919f] text-lg">
            点亮在社区的每一天
          </div>
        </div>
        <div>
          <button
            class="bg-[#f4f9ff] border-[#8dbfff] hover:bg-[#e8f2ff] border-solid border-1 rounded-2 h-13"
          >
            <span class="text-lg text-[#1e80ff] px-5 py-1">去签到</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
