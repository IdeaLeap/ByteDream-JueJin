<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: NavList } = await useFetch('/api/global/navs')
</script>

<template>
  <main>
    <header>
      <div class="header">
        <div class="container">
          <a href="" class="logo">
            <NuxtLink to="/"><Logo /></NuxtLink>
          </a>
          <nav class="nav-list">
            <ul>
              <li v-for="item in NavList" :key="item.nav">
                <NuxtLink to="{{ item.url }}">
                  <a>{{ item.nav }}</a>
                </NuxtLink>
              </li>
            </ul>
            <span v-for="item in NavList" :key="item.badge">{{ item.badge }}</span>
          </nav>
          <div class="switchThemes">
            <UnoDarkToggle />
          </div>
        </div>
      </div>
    </header>
  </main>
</template>

<style scoped>
div {
  display: block;
}
.switchThemes{
  position: absolute;
  right: 80px;
  border: 1px solid #1e80ff;
  border-radius: 4px;
  background: #1e80ffb8;
}
.header {
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  z-index: 1;
}

.container {
  @apply flex h-19 w-full m-auto items-center relative px-94;
}

.nav-list ul {
  display: flex;
}

.nav-list span {
  display: block;
  position: absolute;
  width: 50px;
  left: 640px;
  top: 3px;
  font-size: 12px;
  background: #ee502f;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
}

.nav-list ul li {
  color: #515767;
  font-size: 1.167rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 4rem;
  width: 52px;
  text-align: center;
  line-height: 4rem;
}
.nav-list ul li:nth-child(1) {
  color: #1e80ff;
}

.nav-list ul li a {
  /* display: block; */
  padding: 18px 0;
  height: 60px;
}

.nav-list ul li a:hover {
  border-bottom: 3px solid #1e80ff;
}

.nav-list ul li:hover {
  color: black;
}

@media screen and (max-width:1190px) {
  .container{
    padding-left: 0;
  }
  .nav-list ul li:nth-child(n+2) {
    display: none;
  }

  .nav-list span {
    display: none;
  }
}

@media screen and (max-width:640px) {
  .nav-list ul li:nth-child(n+2) {
    display: none;
  }
}
</style>
