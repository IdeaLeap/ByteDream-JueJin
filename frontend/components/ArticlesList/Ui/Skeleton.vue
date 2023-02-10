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
  @apply px-[1.67rem] py-[1.75rem]
  @apply dark:bg-jj_bg_gray
}
.skeleton {
  @apply align-middle relative inline-block overflow-hidden my-[0.75rem] h-[1.25rem]
}
.skeleton div {
  @apply w-full h-full bg-jj-skeleton-normal rounded-[1px]
  @apply dark:bg-jj-skeleton-background-normal
}
.skeleton::after {
  animation: shan .6s linear 0s infinite;
  background: linear-gradient(to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, .3) 50%,
      rgba(255, 255, 255, 0) 100%);
  @apply content-none absolute top-0 w-full h-full -skew-45

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
