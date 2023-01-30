<template>
  <div class="all-py-5 all-px-7">
    <div class="skeleton w-2/5">
      <div />
    </div>
    <div class="skeleton w-19/20">
      <div />
    </div>
    <div class="skeleton w-4/5">
      <div />
    </div>
    <div class="skeleton w-3/5">
      <div />
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  height: 1.35rem;
}

.skeleton div {
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: #E5E7EC;
}

.skeleton::after {
  content: "";
  position: absolute;
  animation: shan .75s ease 0s infinite;
  top: 0;
  width: 70%;
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
