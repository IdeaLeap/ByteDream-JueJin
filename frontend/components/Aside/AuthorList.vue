<script setup lang="ts">
import { useAutoAnimate } from '@formkit/auto-animate/vue'
const [parent] = useAutoAnimate()
const page = ref(1)
const AuthorList = ref([]) as any
const { data } = (await useFetch(`/api/authors/list?page=${page.value}`))
AuthorList.value = data.value
const showAll = async () => {
  page.value = 2
  const { data } = (await useFetch(`/api/authors/list?page=${page.value}`))
  AuthorList.value.push(...data.value)
}
</script>

<template>
  <div>
    <div v-if="!!AuthorList" class="recommend-author-block sticky-author-block">
      <div class="user-block-header">
        🎖️作者榜
      </div>
      <div ref="parent" class="user-list">
        <div v-for="item in AuthorList" :key="item.uid" class="item">
          <div rel="" class="link">
            <nuxt-img :src="item.avatar" :alt="`${item.name}的头像`" class="lazy avatar" loading="lazy" />

            <div class="user-info">
              <div class="username username">
                <span class="name" style="max-width: 128px">
                  {{ item.name }}
                </span>
                <span blank="true" class="rank">
                  <nuxt-img :src="`https://pan.marlene.top/d/share/jj/${item.rank}.png`" :alt="`lv-${item.rank}`" title="创作等级" />
                </span>
              </div>
              <div class="position">
                {{ item.motto }}
              </div>
            </div>
          </div>
        </div>

        <div v-if="page === 1" class="item cursor-pointer" @click="showAll">
          <div class="more" f-c-c text-link>
            <span>完整榜单</span>
            <div class="icon" i-carbon-chevron-right />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-block-header {
  padding: 1rem 1.3rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  @apply dark:text-jj_font_white dark:border-nav_icon_color;
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
  margin-right: 0.5rem;
}

.recommend-author-block .item .link .user-info {
  overflow: hidden;
}

.recommend-author-block .item .link .username {
  font-size: 1.16rem;
  font-weight: 400;
  /* color: #333; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
  @apply text-jj-container-normal;
}

.rank {
  display: inline-flex;
  align-items: center;
  margin-left: 0.33rem;
  vertical-align: middle;
}

.rank img {
  width: 35px;
  height: 16px;
}

.recommend-author-block .item .link .description,
.recommend-author-block .item .link .position {
  /* color: #909090; */
  font-size: 1rem;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @apply text-jj-gray-normal;
}

.recommend-author-block .item .more {
  padding: 1rem 0;
  text-align: center;
  border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);
}

.recommend-author-block .item .more .icon {
  margin-left: 5px;
}

.recommend-author-block .item .link:hover {
  background-color: hsla(0, 0%, 84.7%, 0.1);
}

.recommend-author-block {
  @apply bg-jj-sidebar;
}

.link{
  @apply cursor-pointer;
}
</style>
