<script setup lang="ts">
import { NButton, NSwitch } from 'naive-ui'
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
    <NButton strong secondary type="primary" class="bg-[#daf0e4] dark:bg-[#243834]">
      Primary
    </NButton>
    <br><br>
    <NSwitch />
  </div>
</template>
