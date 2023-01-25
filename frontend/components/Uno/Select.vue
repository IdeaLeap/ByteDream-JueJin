<script setup>
const isShow = ref(false)
</script>

<template>
  <div class="dorp-down-area">
    <div class="drop-down dorp-down">
      <li class="dropdown-toggle flex items-center justify-between" @click="isShow = !isShow">
        7天内
        <div class=" text-[#b2bac2]" i-carbon:caret-up :class="!isShow ? 'toggled' : ''" style="transition: all .5s;" />
      </li> <ul v-if="isShow" class="dropdown-menu">
        <li class="route-active">
          <a href="/?sort=three_days_hottest">3天内</a>
        </li><li class="router-link-exact-active route-active">
          <a href="/?sort=weekly_hottest" aria-current="page">7天内</a>
        </li><li class="route-active">
          <a href="/?sort=monthly_hottest">30天内</a>
        </li><li class="route-active">
          <a href="/?sort=hottest">全部</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dorp-down-area {
    position: relative;
    z-index: 9;
}
.dorp-down-area .drop-down {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
.drop-down {
    position: relative;
    color: #909097;
    min-width: 4rem;
}
li {
    list-style: none;
}
.dropdown-toggle {
    box-sizing: border-box;
    min-width: 7rem;
    font-size: 1rem;
    border-radius: 2px;
    padding: 2px 10px;
    font-weight: 400;
    border: 1px solid #ebebeb;
}
.dropdown-toggle:hover {
    background-color: #fafafb;
    cursor: pointer;
}
.toggled {
    transform: rotate(-180deg);
    transition: all .5s;
}

.dropdown-menu {
    box-sizing: border-box;
    position: absolute;
    top: 105%;
    left: 0;
    z-index: 1000;
    min-width: 7rem;
    font-size: 1rem;
    list-style: none;
    text-align: left;
    border-radius: .17rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border: 1px solid #ebebeb;
    background-color: #fff;
}

.dropdown-menu li {
    overflow: hidden;
    width: 100%;
}

.dropdown-menu li a {
    display: block;
    clear: both;
    padding: .83rem;
    line-height: 1.17;
    color: #909097;
}
.dropdown-menu li a:hover {
    background-color: #fafafb;
}
a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
}
</style>
