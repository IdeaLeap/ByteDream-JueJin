<script setup></script>

<template>
  <div class="container-404">
    <nuxt-img
      class="img-404"
      format="webp"
      src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ca1e08b7f30860aecb1b7bb31ae18e50.svg"
      alt="Not Found"
      width="362"
      height="362"
    />
    <NuxtLink class="button-404" to="/">
      回到首页
    </NuxtLink>
  </div>
</template>

<style scoped>
.container-404 {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-jj-404-bg f-c-c flex-col ;
}
.img-404 {
  @apply mb-12 dark:(filter brightness-65);
}
.button-404 {
  @apply text-primary border-1 border-primary px-4 py-2;
}
</style>
