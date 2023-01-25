<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: NavList } = await useFetch('/api/global/navs')
</script>

<template>
  <main>
    <!-- <h1>这里是头部</h1> -->
    <header>
      <div class="header">
        <div class="container">
          <a href="" class="logo">
            <NuxtLink to="/"><Logo /></NuxtLink>
          </a>
          <nav class="nav-list">
            <ul>
              <li v-for="item in NavList" :key="item.nav">
                <a href="">{{ item.nav }}</a>
              </li>
            </ul>
            <span v-for="item in NavList" :key="item.badge">{{ item.badge }}</span>
          </nav>
        </div>
      </div>
    </header>
    <div class="block">
      <DarkToggle />
    </div>
    {{ NavList }}
  </main>
</template>

<style scoped>
div {
  display: block;
}

.header {
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  background-color: #ffffff;
}

.container {
  display: flex;
  height: 4rem;
  width: 100%;
  margin: auto;
  align-items: center;
  position: relative;
  padding-left: 280px;
}

.nav-list ul {
  display: flex;
}

.nav-list span {
  display: block;
  position: absolute;
  width: 50px;
  left: 795px;
  top: -1px;
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
  height: 60px;
  width: 52px;
  text-align: center;
  line-height: 60px;
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
