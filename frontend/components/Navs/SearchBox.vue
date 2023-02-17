<script>
import { ref } from 'vue'

export default {
  setup() {
    const query = ref('')
    const searchResult = ref(null)

    const search = async () => {
      const response = await fetch(`/api/global/search?keyword=${query.value}`)
      searchResult.value = await response.json()
    }

    return {
      query,
      searchResult,
      search,
    }
  },
}
</script>

<template>
  <div class="bar">
    <li class="nav-item search">
      <form role="search" class="search-form isResourceVisible">
        <input type="search" maxlength="32" placeholder="探索稀土掘金" value="" class="search-input isResourceVisible">
        <button type="submit" class="search-submit isResourceVisible">
          <i class="iconfont icon-search" />
        </button>
        <div class="seach-icon-container">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg" alt="搜索"
            class="search-icon"
          >
        </div>
        <div class="typehead" style="display: none;">
          <!---->
          <div class="title">
            <span>搜索历史</span> <span class="clear">
              清空
            </span>
          </div>
          <div class="list">
            <div>
              调试safari
            </div>
            <div>
              safari优化
            </div>
            <div>
              camera
            </div>
            <div>
              设备优化
            </div>
            <div>
              高数
            </div>
            <div>
              青训营笔记
            </div>
          </div>
        </div>
      </form>
    </li>
  </div>
</template>

<style>
/*search form*/
.search-form:hover {
    border: 1px solid #8a919f;
}
@media (max-width: 799px){
.search-form {
    transition: width .2s ease-in;
}}
@media screen and (max-width: 799px){
.search-form {
    width: 220px;
}}
@media screen and (max-width: 1069px){
.search-form {
    width: 240px;
}}
@media screen and (max-width: 1350px)
{.search-form {
    width: 180px;
}}
.search-form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    position: relative;
    height: 2.834rem;
    border: 1px solid #c2c8d1;
    transition: width .2s;
}
/**/

.search-form .search-input {
    border: none;
    width: calc(100% - 44px);
    padding: .6rem 0 .6rem 1rem;
    box-shadow: none;
    outline: none;
    font-size: 1.1rem;
    color: #8a919f;
    background-color: transparent;
    transition: width .3s;
}

[type=search] {
    appearance: textfield;
    outline-offset: -2px;
}
[type=search] {
    appearance: textfield;
    outline-offset: -2px;
}
a, button, input {
    margin: initial;
}
button, input {
    overflow: visible;
}
button, input, select, textarea {
    font: inherit;
    margin: 0;
}
a, button, input {
    margin: initial;
}
button, input {
    overflow: visible;
}
button, input, select, textarea {
    font: inherit;
    margin: 0;
}
/*icon container*/
.search-form .seach-icon-container {
    position: relative;
    left: -2px;
    width: 44px;
    height: 30px;
    background: var(--juejin-background);
    border-radius: 2px;
}
/*icon*/
.search-form .search-icon {
    display: inline-block;
    width: 2.33rem;
    padding: 0 .8333rem 0 0;
    cursor: pointer;
    margin: 7px 15px;
}
img {
    border-style: none;
}
.bar input:focus {
            width: 300px;
        }
</style>
