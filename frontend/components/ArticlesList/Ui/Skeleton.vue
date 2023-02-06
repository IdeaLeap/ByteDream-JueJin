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
  @apply px-[1.67rem] py-[0.8rem]
  @apply dark:bg-jj_bg_gray
}
.skeleton {
  @apply align-middle relative inline-block overflow-hidden rounded-[4px] mx-[5px] my-[7px] h-[1.35rem]
}
.skeleton div {
  @apply w-full h-full bg-jj-skeleton-normal rounded-[2px]
  @apply dark:bg-jj-skeleton-background-normal
}
.skeleton::after {
  animation: shan .75s ease 0s infinite;
  background: linear-gradient(to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%);
  @apply content-none absolute top-0 w-7/10 h-full -skew-45
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
