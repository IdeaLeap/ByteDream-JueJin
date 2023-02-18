![](https://picxyxsw.oss-cn-hangzhou.aliyuncs.com/20230116155200.png)


<h2 align="center">
<a href="https://github.com/MarleneJiang/ByteDream-JueJin">ByteDream-JueJin</a>
</h2><br>

<pre align="center">
🧪 正在开发中
</pre>

<p align="center">
<br>
<a href="https://bytedream.top/">🖥 Online Preview</a>
</p>

## Features

- ⚡️ `Nuxt3` - SSR
- ✨ `Vue3.2`
- 💨 `Turbo` - Manage Monorepo
- 💎 `Strapi` - Headless CMS
- 😎 `@Nuxt/Image` - Optimised images
- 😁 `Umami` - Better Analytics
- 🃏 `Commit Lint` -  Make sure you & your teammates follow the conventional commit
- 💖 `Husky & Lint Staged` — Run scripts on your staged files before they are committed
- 📏 `Eslint` - Find and fix problems in your code, also will auto-sort your imports
- 🐶 `UnoCss` - The instant on-demand atomic CSS engine
- 🤖 `preset-icons` - Use icons from any icon sets in Pure CSS
- ⏰ The `<script setup>` syntax
- 🍍 `Pinia` - Convenient State Management
- 🚘 `Layout system` - What you see is what you have
- 🎨 `APIs auto importing` - for Composition API, VueUse and custom composables
- 🦾 `TypeScript` - of course
- 👷 `Github Actions` - Lint your code on PR
- 👀 `Automatic Branch and Issue Autolink` - Branch will be automatically created on issue assigned, and auto-linked on PR
- 🗺 `Nuxt SEO Kit` - Sitemap,Schema.org,Generate dynamic social share images
- 📦 `Vercel` - Auto Deploy & Preview with Workflows
- 🔥 `Netlify + Cloudflare` - Deployed in Production Environment
- 👀 `Sentry` - Error Tracking
- 👁️ `MeiliSearch` - Fast Search Engine

## 开发

```bash
yarn
yarn dev
```

## 预览

(netlify) <https://bytedream.top/>

(vercel) <https://vercel.bytedream.top/>

(本地部署版本 位于杭电宿舍的服务器) <http://op.bytedream.top/>

## 目录结构

```
ByteDream-JueJin
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  ├─ bug_report.md
│  │  ├─ custom.md
│  │  └─ feature_request.md
│  └─ workflows
│     ├─ autoDeploy.yaml // 自动部署
│     ├─ issue.yaml
│     ├─ lint.yaml
│     └─ release.yaml
├─ .gitignore
├─ .husky
│  ├─ commit-msg
│  ├─ post-merge
│  ├─ pre-commit
│  └─ _
│     ├─ .gitignore
│     └─ husky.sh
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ .yarnrc
├─ backend
│  ├─ .editorconfig
│  ├─ .eslintignore
│  ├─ .eslintrc
│  ├─ .gitignore
│  ├─ .strapi-updater.json
│  ├─ .tmp
│  │  └─ data.db // 数据库文件
│  ├─ config
│  │  ├─ admin.js
│  │  ├─ api.js
│  │  ├─ database.js
│  │  ├─ middlewares.js
│  │  ├─ plugins.js
│  │  └─ server.js
│  ├─ database
│  │  └─ migrations
│  │     └─ .gitkeep
│  ├─ favicon.png
│  ├─ package.json
│  ├─ public
│  │  ├─ robots.txt
│  │  └─ uploads
│  │     ├─ .gitkeep
│  │     ├─ favicon_9f85af9de4.png
│  │     └─ favicon_f56143b8c2.png
│  ├─ README.md
│  ├─ src
│  │  ├─ admin
│  │  │  ├─ app.example.js
│  │  │  └─ webpack.config.example.js
│  │  ├─ api
│  │  │  ├─ .gitkeep
│  │  │  ├─ article
│  │  │  │  ├─ content-types
│  │  │  │  │  └─ article
│  │  │  │  │     └─ schema.json
│  │  │  │  ├─ controllers
│  │  │  │  │  └─ article.js
│  │  │  │  ├─ documentation
│  │  │  │  │  └─ 1.0.0
│  │  │  │  │     └─ article.json
│  │  │  │  ├─ routes
│  │  │  │  │  └─ article.js
│  │  │  │  └─ services
│  │  │  │     └─ article.js
│  │  │  ├─ author
│  │  │  │  ├─ content-types
│  │  │  │  │  └─ author
│  │  │  │  │     └─ schema.json
│  │  │  │  ├─ controllers
│  │  │  │  │  └─ author.js
│  │  │  │  ├─ documentation
│  │  │  │  │  └─ 1.0.0
│  │  │  │  │     └─ author.json
│  │  │  │  ├─ routes
│  │  │  │  │  └─ author.js
│  │  │  │  └─ services
│  │  │  │     └─ author.js
│  │  │  ├─ colum
│  │  │  │  ├─ content-types
│  │  │  │  │  └─ colum
│  │  │  │  │     └─ schema.json
│  │  │  │  ├─ controllers
│  │  │  │  │  └─ colum.js
│  │  │  │  ├─ documentation
│  │  │  │  │  └─ 1.0.0
│  │  │  │  │     └─ colum.json
│  │  │  │  ├─ routes
│  │  │  │  │  └─ colum.js
│  │  │  │  └─ services
│  │  │  │     └─ colum.js
│  │  │  ├─ global
│  │  │  │  ├─ content-types
│  │  │  │  │  └─ global
│  │  │  │  │     └─ schema.json
│  │  │  │  ├─ controllers
│  │  │  │  │  └─ global.js
│  │  │  │  ├─ documentation
│  │  │  │  │  └─ 1.0.0
│  │  │  │  │     └─ global.json
│  │  │  │  ├─ routes
│  │  │  │  │  └─ global.js
│  │  │  │  └─ services
│  │  │  │     └─ global.js
│  │  │  ├─ tag
│  │  │  │  ├─ content-types
│  │  │  │  │  └─ tag
│  │  │  │  │     └─ schema.json
│  │  │  │  ├─ controllers
│  │  │  │  │  └─ tag.js
│  │  │  │  ├─ documentation
│  │  │  │  │  └─ 1.0.0
│  │  │  │  │     └─ tag.json
│  │  │  │  ├─ routes
│  │  │  │  │  └─ tag.js
│  │  │  │  └─ services
│  │  │  │     └─ tag.js
│  │  │  └─ type
│  │  │     ├─ content-types
│  │  │     │  └─ type
│  │  │     │     └─ schema.json
│  │  │     ├─ controllers
│  │  │     │  └─ type.js
│  │  │     ├─ documentation
│  │  │     │  └─ 1.0.0
│  │  │     │     └─ type.json
│  │  │     ├─ routes
│  │  │     │  └─ type.js
│  │  │     └─ services
│  │  │        └─ type.js
│  │  ├─ components
│  │  │  ├─ articles
│  │  │  │  ├─ ads.json
│  │  │  │  └─ content-ad.json
│  │  │  └─ layouts
│  │  │     ├─ ads.json
│  │  │     ├─ footers.json
│  │  │     ├─ gadgets.json
│  │  │     ├─ links.json
│  │  │     └─ navs.json
│  │  ├─ extensions
│  │  └─ index.js
│  ├─ start.sh
│  └─ yarn.lock
├─ CHANGELOG.md
├─ commitlint.config.js
├─ frontend
│  ├─ .eslintrc
│  ├─ .gitignore
│  ├─ .prettierrc
│  ├─ .sentryclirc
│  ├─ app.vue
│  ├─ assets
│  │  ├─ css
│  │  │  └─ main.css
│  │  ├─ highlight.ts
│  │  └─ themes.ts
│  ├─ components
│  │  ├─ ArticlesContent // 详细文章
│  │  │  ├─ End
│  │  │  │  ├─ ColumnContainer.vue
│  │  │  │  └─ TagList.vue
│  │  │  ├─ highlightStyle.ts
│  │  │  ├─ index.vue
│  │  │  ├─ SideBar
│  │  │  │  ├─ Left
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ Svg.vue
│  │  │  │  └─ Right
│  │  │  │     ├─ Author.vue
│  │  │  │     ├─ Catalogue.vue
│  │  │  │     ├─ Column.vue
│  │  │  │     ├─ index.vue
│  │  │  │     └─ RelatedArticles.vue
│  │  │  └─ themeStyle.ts
│  │  ├─ ArticlesList // 文章列表
│  │  │  ├─ index.vue
│  │  │  ├─ Item
│  │  │  │  ├─ Ads.vue
│  │  │  │  ├─ AuthorCard
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ Bar
│  │  │  │  │  ├─ Bottom.vue
│  │  │  │  │  ├─ Center.vue
│  │  │  │  │  └─ Top.vue
│  │  │  │  └─ index.vue
│  │  │  ├─ Navigation
│  │  │  │  ├─ index.vue
│  │  │  │  ├─ Link.vue
│  │  │  │  └─ Select.vue
│  │  │  └─ Ui
│  │  │     ├─ Btns.vue
│  │  │     ├─ Img.vue
│  │  │     ├─ Link.vue
│  │  │     └─ Skeleton.vue
│  │  ├─ Aside // 主页侧边栏
│  │  │  ├─ Advertisements.vue
│  │  │  ├─ ArticleList.vue
│  │  │  ├─ AuthorList.vue
│  │  │  ├─ Footers.vue
│  │  │  ├─ Gadgets.vue
│  │  │  ├─ index.vue
│  │  │  ├─ LinkList.vue
│  │  │  ├─ Sign.vue
│  │  │  └─ SuspensionPanel.vue
│  │  ├─ Logo.vue
│  │  ├─ Main
│  │  │  └─ index.vue
│  │  ├─ Navs // 导航栏
│  │  │  ├─ index.vue
│  │  │  ├─ Item.vue
│  │  │  └─ SearchBox.vue
│  │  ├─ Types
│  │  │  ├─ index.vue
│  │  │  └─ TagNav.vue
│  │  └─ Uno
│  │     └─ DarkToggle.vue
│  ├─ composables
│  │  ├─ ArticleContent
│  │  │  └─ useImmerse.ts
│  │  ├─ Articlelist
│  │  │  ├─ useArtlistFn.ts
│  │  │  └─ useScrollBottom.ts
│  │  ├─ useFold.ts
│  │  ├─ useThrottle.ts
│  │  └─ useTime.ts
│  ├─ html.d.ts
│  ├─ layouts
│  │  └─ default.vue // 默认布局
│  ├─ netlify.toml
│  ├─ nuxt.config.ts
│  ├─ package.json
│  ├─ pages // 基本路由
│  │  ├─ article // 详情文章页 根据id显示对应文章
│  │  │  └─ [id].vue
│  │  ├─ index.vue // 首页
│  │  ├─ [...all].vue // 404页面
│  │  └─ [type] // 标签页及子标签页 例如：/frontend/vue
│  │     ├─ index.vue
│  │     └─ [tag].vue
│  ├─ plugins
│  │  └─ sentry.client.ts
│  ├─ public
│  │  ├─ favicon.png
│  │  └─ og-image.png
│  ├─ server
│  │  ├─ api // BFF接口
│  │  │  ├─ articles
│  │  │  │  ├─ columns
│  │  │  │  │  └─ [id].ts
│  │  │  │  ├─ list.ts
│  │  │  │  ├─ tags.ts
│  │  │  │  ├─ update
│  │  │  │  │  └─ like.ts
│  │  │  │  └─ [id].ts
│  │  │  ├─ authors
│  │  │  │  └─ list.ts
│  │  │  └─ global
│  │  │     ├─ ad.ts
│  │  │     ├─ content-ad.ts
│  │  │     ├─ index.ts
│  │  │     ├─ navs.ts
│  │  │     ├─ search.ts
│  │  │     ├─ tags.ts
│  │  │     └─ types.ts
│  │  └─ README.md
│  ├─ start.sh
│  ├─ tsconfig.json
│  ├─ types
│  │  ├─ IArticle.ts
│  │  ├─ IArticleItem.ts
│  │  ├─ IGlobal.ts
│  │  ├─ ILink.ts
│  │  ├─ IMutation.ts
│  │  ├─ INav.ts
│  │  ├─ ISearch.ts
│  │  └─ IType.ts
│  ├─ unocss.config.ts
│  ├─ utils
│  │  └─ useGraphql.ts
│  └─ vercel.json
├─ index.ts
├─ LICENSE
├─ package.json
├─ README.md
├─ SECURITY.md
├─ turbo.json
└─ yarn.lock

```