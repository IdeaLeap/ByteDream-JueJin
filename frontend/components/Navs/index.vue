<script>
// const runtimeConfig = useRuntimeConfig()
export default {
  data() {
    return {
      showList: false,
    }
  },
  methods: {
    onClick() {
      this.showList = !this.showList
    },
  },

}
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
              <li>
                <button class="button" @click="onClick()">
                  首页
                </button>
              </li>
              <li>
                <a href="">首页</a>
              </li>
              <li><a href="">沸点</a></li>
              <li><a href="">课程</a></li>
              <li><a href="">直播</a></li>
              <li><a href="">活动</a></li>
              <li><a href="">竞赛</a></li>
              <li><a href="">商城</a></li>
              <li><a href="">APP</a></li>
              <li><a href="">插件</a></li>
            </ul>
            <span>邀请有礼</span>
          </nav>
          <div v-show="showList" class="main-nav-list">
            <ul>
              <li><a href="">首页</a></li>
              <li><a href="">沸点</a></li>
              <li><a href="">课程</a></li>
              <li><a href="">直播</a></li>
              <li><a href="">活动</a></li>
              <li><a href="">竞赛</a></li>
              <li><a href="">商城</a></li>
              <li><a href="">APP</a></li>
              <li><a href="">插件</a></li>
            </ul>
          </div>
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
  height: 15px;
  width: 50px;
  left: 845px;
  top: 2px;
  font-size: 12px;
  background: #ee502f;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
  line-height: 15px;
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
.nav-list ul li button{
  color: #1e80ff;
}
.nav-list ul li:nth-child(2) {
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

.main-nav-list {
  position: absolute;
  top: 48px;
  left: 124px;
  background-color: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  z-index: 999;
}

.main-nav-list ul {
  margin-top: 20px;
}

.main-nav-list ul li {
  display: block;
  width: 120px;
  height: 48px;
  font-size: 1rem;
  margin: auto;
  text-align: center;
  line-height: 48px;
}

.main-nav-list ul li a {
  padding: 18px 0;
  height: 60px;
  color: #515767;
}

.main-nav-list ul li a:hover {
  border-bottom: 3px solid #1e80ff;
}

.main-nav-list ul li:hover {
  color: black;
}

@media screen and (min-width:1190px) {
  .button {
    display: none;
  }

  .main-nav-list {
    display: none;
  }
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

  .main-nav-list {
    left: 70px;
  }
}

@media screen and (max-width:640px) {
  .container{
    padding-left: 0;
  }

  .nav-list ul {
    padding-left: 25px;
  }

  .button {
    padding-left: 20px;
  }

  .main-nav-list {
    top: 48px;
    left: 135px;
  }

  .nav-list ul li:nth-child(n+2) {
    display: none;
  }
}
</style>
