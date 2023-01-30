<script setup>
import { reactive } from 'vue'
const runtimeConfig = useRuntimeConfig()
const { data: NavList } = await useFetch('/api/global/navs')
// button按钮
const list = reactive({
  showList: false,
})
const onClick = () => {
  list.showList = !list.showList
}
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
              <li>
                <button class="button" @click="onClick()">
                  首页
                </button>
                <ul v-show="list.showList" class="list">
                  <li v-for="item in NavList" :key="item.nav">
                    <NuxtLink to="{{ item.url }}">
                      {{ item.nav }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li v-for="item in NavList" :key="item.nav" class="main-nav-list">
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
/* 弹出菜单 */
.button{
  display: none;
  font-size: 17px;
  color: #1e80ff;
}
.list{
  position: absolute;
  flex-direction:column;
  top: 50px;
  left: -34px;
  z-index: 3;
  background-color: #ffffff;
  width: 120px;
  /* height: 550px; */
  border: 1px solid #f1f1f1;
  /* display: none!important; */
}
.list li{
  display: block;
  text-align: center;
  margin: auto;
  width: 30px!important;
}
/* .list li:hover{
  border-bottom: 3px solid #1e80ff;
} */
.switchThemes{
  position: absolute;
  right: 30px;
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
  z-index: 999;
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
  width: 55px;
  left: 1310px;
  top: 14px;
  font-size: 12px;
  zoom: 0.65;
  background: #ee502f;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
}

.nav-list ul li {
  position: relative;
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
.main-nav-list:nth-child(2){
  color: #1e80ff!important;
}
@media screen and (min-width:1190px){
  .list{
    display: none!important;
  }
}
@media screen and (max-width:1190px) {
  .container{
    padding-left: 0;
  }
  .main-nav-list {
    display: none;
  }

  .nav-list span {
    display: none;
  }
  .button{
    display: block;
    margin-left: 10px;
  }
}
</style>
