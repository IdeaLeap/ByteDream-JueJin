<script setup>
const { data: Authors } = await useFetch('/api/authors')
</script>

<template>
  <div>
    <div class="recommend-author-block sticky-author-block">
      <header class="user-block-header">
        🎖️作者榜
      </header>
      <div class="user-list">
        <div v-for="item in Authors" :key="item.uid" class="item">
          <nuxt-link target="_blank" rel="" class="link">
            <nuxt-img :src="item.img" :alt="`${item.name}的头像`" class="lazy avatar" loading="lazy" />

            <div class="user-info">
              <nuxt-link target="_blank" rel="" class="username username">
                <span class="name" style="max-width: 128px;">
                  {{ item.name }}
                </span>
                <span blank="true" class="rank">
                  <nuxt-img
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png"
                    :alt="`lv-${item.rank}`" title="创作等级"
                  />
                </span>
              </nuxt-link>
              <div class="position">
                {{ item.scr }}
              </div>
            </div>
          </nuxt-link>
        </div>

        <nuxt-link href="/recommendation/authors/recommended" class="item" target="_blank">
          <div class="more" f-c-c text-link>
            <span>完整榜单</span>
            <div class="icon" i-carbon-chevron-right />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.user-block-header {
  padding: 1rem 1.3rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
}

.recommend-author-block .item .link {
  padding: 1rem 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.recommend-author-block .item .link .avatar {
  flex: 0 0 auto;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  margin-right: .5rem;
}

.recommend-author-block .item .link .user-info {
  overflow: hidden;
}

.recommend-author-block .item .link .username {
  font-size: 1.16rem;
  font-weight: 400;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}

.rank {
  display: inline-flex;
  align-items: center;
  margin-left: .33rem;
  vertical-align: middle;
}

.rank img {
  width: 35px;
  height: 16px;
}

.recommend-author-block .item .link .description,
.recommend-author-block .item .link .position {
  color: #909090;
  font-size: 1rem;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recommend-author-block .item .more {
  padding: 1rem 0;
  text-align: center;
  border-top: 1px solid hsla(0, 0%, 59.2%, .1);
}

.recommend-author-block .item .more .icon {
  margin-left: 5px;
}

.recommend-author-block .item .link:hover {
  background-color: hsla(0, 0%, 84.7%, .1);
}
</style>
