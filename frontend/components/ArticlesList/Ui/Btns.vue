<template>
  <div class="flex justify-between">
    <div class="primary">
      关注
    </div>
    <div class="primary plain">
      私信
    </div>
  </div>
</template>

<style scoped>
.primary {
  transition: background-color .1s linear .05s;
  @apply px-[3.5rem] py-[0.4rem] my-[0.75rem] text-[1.167rem] text-white h-full bg-jj-brand-normal rounded-[2px]
  @apply border border-solid border-jj-stroke-normal
  @apply hover:bg-jj-button-primary-normal
}
.plain {
  @apply text-jj-button-normal bg-jj-button-background-normal
  @apply hover:bg-jj-button-plain-normal
}
</style>
