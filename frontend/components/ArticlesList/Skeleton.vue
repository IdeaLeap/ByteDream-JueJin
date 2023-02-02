<template>
  <div class="skeleton_container">
    <div class="skeleton w-2/5">
      <div />
    </div>
    <div class="skeleton w-full">
      <div />
    </div>
    <div class="skeleton w-4/5">
      <div />
    </div>
    <div class="skeleton mb-5 w-3/5">
      <div />
    </div>
  </div>
</template>

<style scoped>
.skeleton_container {
  @apply p-5 dark:bg-jj_bg_gray
}
.skeleton {
  @apply align-middle relative inline-block overflow-hidden rounded-[4px] mx-[5px] my-[7px] h-[1.35rem]
}
.skeleton div {
  @apply dark:bg-[#555] w-full h-full bg-[#E5E7EC] rounded-[2px]
}
.skeleton::after {
  content: "";
  animation: shan .75s ease 0s infinite;
  background: linear-gradient(to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: skewX(-45deg);
  @apply absolute top-0 w-7/10 h-full
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>
