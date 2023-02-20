<template>
  <div class="alert-list alert-list">
    <div class="alert">
      代码复制成功
    </div>
  </div>
</template>

<style scoped>
.alert-list {
  @apply flex flex-col fixed top-2rem right-2rem z-2000;
}
.alert{
  @apply inline-block py-1rem px-2rem max-w-15rem text-size-1.167rem c-#007bff bg-#e6f3ff rd-2px cursor-pointer;
}
</style>
