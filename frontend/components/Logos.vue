<template>
  <div inline-flex text-2xl font-300 cursor-default>
    <div flex flex-col children:mx-auto>
      <nuxt-img format="webp" w-18 h-18 inline-block src="/nuxt.png">
        <span text-green5 mt--2>Nuxt 3</span>
      </nuxt-img>
    </div>
    <div text="3xl gray4" m="x-4 y-auto" transition-all-500 transform hover:rotate-135 i-carbon-add />
    <div flex flex-col children:mx-auto>
      <nuxt-img format="webp" w-18 h-18 inline-block src="/vite.png">
        <span text-purple5 mt--2>Vitesse</span>
      </nuxt-img>
    </div>
  </div>
</template>
