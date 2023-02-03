<script lang="ts" setup>
defineProps({
  plain: Boolean,
})
</script>

<template>
  <div :class="plain ? 'plain_button primary_button' : 'primary_button'">
    <slot />
  </div>
</template>

<style scoped>
.primary_button {
  padding: .5rem 4rem;
  margin: 1rem;
  font-size: 1.167rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  white-space: nowrap;
  height: 100%;
  color: var(--juejin-font-white);
  background-color: var(--juejin-brand-1-normal);
  border-radius: 3px;
  transition: background-color .1s linear .05s;
}
.plain_button {
  color: #2885FF;
  background-color: #F4F9FF;
}
.primary_button:hover {
  background-color: #388EFF;
}
.plain_button:hover {
  background-color: #E8F2FF;
}
</style>
