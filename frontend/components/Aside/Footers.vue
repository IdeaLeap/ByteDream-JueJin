<script setup lang="ts">
defineProps({
  footers: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <ul class="more-list">
      <li v-for="i in footers" :key="i.footer" class="item">
        <NuxtLink :to="i.url" target="_blank" rel="nofollow">
          <NuxtImg
            v-if="i.icon"
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png"
            alt="police"
            class="police_img"
          />
          {{ i.footer }}
        </NuxtLink>
        <span>{{ i.describe }}</span>
      </li>
    </ul>
    <ul class="more-list account-list">
      <li class="item weibo">
        <NuxtLink
          href="http://weibo.com/xitucircle"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <NuxtImg
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.0cd39f5.png"
            alt="微博"
            class="icon"
          />
        </NuxtLink>
      </li>
      <li class="item wechat">
        <NuxtImg
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.ce329e6.png"
          alt="微信"
          class="icon"
        />
        <div class="qr-panel">
          <div class="title">
            微信扫一扫
          </div>
          <NuxtImg
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-qr.b247fde.jpeg"
            class="qr"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.more-list {
  font-size: 1rem;
  line-height: 1.6;
  color: #9aa3ab;
}
.more-list .item {
  float: left;
}

.more-list .item:not(:last-child):after {
  content: "";
  margin-right: 8px;
}
.more-list:after {
  display: table;
  content: "";
  clear: both;
}
.more-list .item span {
  color: #909090;
}
.more-list.account-list {
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0;
}
.police_img {
  vertical-align: middle;
}
.more-list.account-list .icon {
  width: 24px;
  cursor: pointer;
}
.more-list.account-list .wechat {
  position: relative;
  height: 29.6px;
}
.more-list.account-list .wechat .qr {
  width: 100%;
}
.more-list.account-list .icon:hover + .qr-panel {
  opacity: 1;
}
.more-list.account-list .wechat .qr-panel {
  position: absolute;
  background: #fff;
  width: 10rem;
  top: 100%;
  left: -100%;
  z-index: 2;
  padding: 0.8rem 0 0;
  opacity: 0;
  border: 1px solid #ddd;
  transform: translate(-24px);
}
.more-list.account-list .wechat .title {
  text-align: center;
}
.more-list.account-list .wechat .qr {
  width: 100%;
}
div {
  display: block;
}
ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
  background-color: transparent;
}
a,
button,
input {
  margin: initial;
}
a:hover {
  color: #007fff;
}
a:active,
a:hover {
  outline-width: 0;
}
img {
  border-style: none;
}
img {
  overflow-clip-margin: content-box;
  overflow: clip;
}
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: inline;
  vertical-align: middle;
}
</style>
