<template>
  <div class="btn_group">
    <div class="primary">
      关注
    </div>
    <div class="primary plain">
      私信
    </div>
  </div>
</template>

<style scoped>
.btn_group {
  @apply f-c-c
}
.primary {
  transition: background-color .1s linear .05s;
  @apply px-[4rem] py-[0.5rem] m-[1rem] text-[1.167rem] text-white h-full bg-jj-brand-normal rounded-[4px]
  @apply border border-solid border-jj-stroke-normal
}
.plain {
  @apply text-[#2885FF] bg-[#F4F9FF]
}
.primary:hover {
  @apply bg-[#388EFF]
}
.plain:hover {
  @apply bg-[#E8F2FF]
}
</style>
