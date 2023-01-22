<script>
export default {
  name: 'XtxSkeleton',
  // 使用的时候需要动态设置 高度，宽度，背景颜色，是否闪下
  props: {
    bg: {
      type: String,
      default: '#efefef',
    },
    width: {
      type: String,
      default: '70%',
    },
    height: {
      type: String,
      default: '1.35rem',
    },
    animated: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<template>
  <div class="all-py-5 all-px-7">
    <div class="skeleton" :style="{ width: '40%', height }" :class="{ shan: animated }">
      <div class="block" :style="{ backgroundColor: bg }" />
    </div>
    <div class="skeleton" :style="{ width: '95%', height }" :class="{ shan: animated }">
      <div class="block" :style="{ backgroundColor: bg }" />
    </div>
    <div class="skeleton" :style="{ width: '80%', height }" :class="{ shan: animated }">
      <div class="block" :style="{ backgroundColor: bg }" />
    </div>
    <div class="skeleton" :style="{ width: '60%', height }" :class="{ shan: animated }">
      <div class="block" :style="{ backgroundColor: bg }" />
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}

.skeleton .block {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}

.shan::after {
  content: "";
  position: absolute;
  animation: shan 1.5s ease 0s infinite;
  top: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: skewX(-45deg);
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
