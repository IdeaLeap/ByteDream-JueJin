# API接口文档

根据需求，接口大致分为三部分：文章、作者、全局设置。
对应server/api的三个文件夹：articles、authors、global

## 文章
### 获取单篇文章详细信息

| 接口 | /articles/[id] |
| --- | --- |
| 介绍 | 获取指定id的文章详细信息，包括文章内容、作者信息、类别等 |
| 备注 | 不包含summary简介字段 |
#### 使用方式 
```
const { data: ArticleData } = await useFetch('/api/articles/'+route.params.id)
```

#### 数据结构
```ts
interface IAuthor {
  id: string
  name: string
  motto: string
  avatar: string
  rank: Number
  liked: Number
  viewed: Number
}

interface ITagItem {
  tag: string
}

interface IType {
  type: string
}

interface IColumnArticleItem {
  id: string
  title: string
}
interface IColumn {
  column: string
  cover: string
  describe: string
  articles: { data: IColumnArticleItem[] }
}
export interface IArticle {
  id: string
  title: string
  viewed: number
  liked: number
  shared: number
  commented: number
  content: string
  cover: string
  createdAt: string
  updatedAt: string
  authorId: IAuthor
  tagIds: { data: ITagItem[] }
  typeId: IType
  columId: IColumn
}
```

### 获取所有标签
| 接口 | /articles/tags |
| --- | --- |
| 介绍 | 获取所有标签 |
| 备注 | TagList是array类型 |
#### 使用方式
```
const { data: TagList } = await useFetch('/api/articles/tags')
```
#### 数据结构
```ts
interface ITagItem {
  tag: string
}
```


### 获取专栏文章
| 接口 | /articles/columns/id |
| --- | --- |
| 介绍 | 获取专栏相关文章，包含id、标题数据 |
| 备注 | ColumnList 是array类型 |
#### 使用方式
```
const { data: ColumnList } = await useFetch(`/api/articles/columns/`+route.params.id)
```
#### 数据结构
```ts
interface IArticleItem {
  id: string
  title: string
}
```

## 获取相关文章
| 接口 | /articles/tags |
| --- | --- |
| 参数(GET)| tags（传入格式化的array，例如 [{"tag":"frontend","alias":"前端"}] ）authorId 作者id |
| 示例 | http://localhost:3000/api/articles/tags?tags=[{%22tag%22:%22frontend%22,%22alias%22:%22%E5%89%8D%E7%AB%AF%22}]&authorId=6 |
| 介绍 | 获取相关tag的文章，支持多个tag，最多十篇文章，按点赞量逆序排列 |
| 备注 | ArticleList是array类型 |
#### 使用方式
```
const { data: ArticleList } = await useFetch(`/api/articles/tags?tags=${JSON.stringify(tags)}&authorId=${authorId}`)
```
#### 数据结构

```ts
interface IArticleItem {
  id: string
  title: string
  liked: number
  commented: number
}
```

## 获取文章列表
| 接口 | /articles/list |
| --- | --- |
| 参数(GET) | sort：recommended、newest、hottest、three_days_hottest、weekly_hottest、monthly_hottest
pageNum：1 ~ ∞
type：（不填则是综合） |
| 介绍 | 获取指定规则的文章列表，包含封面、简介、作者名称等数据 |
| 备注 | ArticleList是array类型 |
#### 使用方式
```
const { data: ArticleList } = await useFetch(`/api/articles/list?sort=${sort}&type=${type}&pageNum=${pageNum}`)
```

#### 数据结构
```ts
interface IAuthor {
  id: string
  name: string
  motto: string
  avatar: string
  rank: Number
  liked: Number
  viewed: Number
}

interface ITagItem {
  tag: string
}

interface IArticleItem {
  id: string
  title: string
  viewed: number
  liked: number
  commented: number
  summary: string
  cover: string
  createdAt: string
  authorId: IAuthor
  tagIds: { data: ITagItem[] }
}
```

### 点赞
| 接口 | /authors/update/like |
| --- | --- |
| 介绍 | 增加文章点赞数和该作者点赞总量 |
#### 使用方式
```
const { data: ArticleLiked } = await useFetch(`/api/authors/update/like?id=${id}`)
```
#### 数据结构
```ts
export interface mutation {
  code: number
  message: string
}

export interface liked extends mutation {
  data?: {
    liked: number
  }
}

```

## 作者
### 获取作者榜
| 接口 | /authors/list?page |
| --- | --- |
| 介绍 | 获取作者榜数据，包括作者头像、名称、描述等，一次返回4个作者 |
| 备注 | AuthorList是array类型 |
#### 使用方式
```
const { data: AuthorList } = await useFetch(`/api/authors/list?page=${page || 1}`)
```

#### 数据结构
```ts
interface IAuthorListItem {
  name: string
  motto: string
  avatar: string
  rank: Number
}
```

## 全局设置
### 获取导航栏
| 接口 | /global/navs |
| --- | --- |
| 介绍 | 获取导航栏数据，包括名称、链接、标签。 |
| 备注 | NavList是array类型 |
#### 使用方式
```
const { data: NavList } = await useFetch('/api/global/navs')
```



#### 数据结构

```ts
interface INav {
  name: string
  url: string
  badge?: string
}
```

### 获取侧边栏
| 接口 | /global |
| --- | --- |
| 介绍 | 获取侧边栏数据，包含广告栏、小样式栏、链接栏、页脚栏等数据 |
| 备注 | 接口包含文章列表的一个广告文章数据 |
#### 使用方式
```
const { data: GlobalData } = await useFetch('/api/global')
```

#### 数据结构

```ts
interface IGadget {
  title: string
  subscribe: string
  qrcode: string
  url: string
}
interface ILinksItem {
  title: string
  icon: string
  url: string
}
interface IAdsItem {
  ad: string
  img: string
  url: string
}
interface IFootersItem {
  footer: string
  url?: string
  describe?: string
  icon?: string
}
interface IArticleAd {
  title: string
  author: string
  summary: string
  cover: string
  url: string
}
interface IGlobal {
  gadgets: IGadget
  links: ILinksItem[]
  ads: IAdsItem[]
  footers: IFootersItem[]
  articleAds: IArticleAd
}
```

### 获取标签栏
| 接口 | /global/types?page |
| --- | --- |
| 介绍 | 获取首页标签栏数据 |
| 备注 | TypeList是array类型，一页最多9个type |
#### 使用方式
```
const { data: typeList } = await useFetch(`/api/global/types?page=${pageNum}`)
```

#### 数据结构

```ts
export interface IType {
  data: ITypeItem[]
  meta: ITypeMeta
}

export interface ITypeMeta {
  pagination: {
    pageCount: number
    total: number
  }
}

export interface ITypeItem {
  type: string
  alias: string
  tags: { data: ITagItem[] }
}

export interface ITagItem {
  id: string
  tag: string
  alias: string
}

```

### 获取文章列表数据
| 接口 | /global/ad |
| --- | --- |
| 介绍 | 获取文章列表数据 |
| 备注 | 接口包含文章列表的一个广告文章数据 |
#### 使用方式
```
const { data: AdData} = await useFetch('/api/global/ad')
```

#### 数据结构

```ts
export interface IArticleAd {
  title: string
  author: string
  summary: string
  cover: string
  url: string
}
```

### 获取文章页广告数据
| 接口 | /global/content-ad |
| --- | --- |
| 介绍 | 获取文章页广告数据 |
| 备注 | 接口包含文章页的一个广告文章数据 |
#### 使用方式
```
const { data: AdData} = await useFetch('/api/global/content-ad')
```

#### 数据结构

```ts
export interface IAdsItem {
  ad: string
  img: string
  url: string
}
```

### 文章搜索
| 接口 | /global/search?keyword |
| --- | --- |
| 介绍 | 搜索文章数据，根据关键词搜索 |
#### 使用方式
```
const { data: SearchData} = await useFetch(`/api/global/search?keyword=${keyword}`)
```

#### 数据结构

```ts
export interface ISearch {
  hits: IArticleData[]
  estimatedTotalHits: number
  offset: number
  limit: number
  processingTimeMs: number
  query: string
}
interface IArticleData {
  _meilisearch_id: string
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  viewed: string
  liked: string
  shared: string
  commented: string
  content: string
  cover: string
  sunmmary: string
  typeId: ITypeId
  authorId: IAuthorId
  tagIds: ITagIds[]
  columId: IColumId[]
}
interface ITypeId {
  id: number
  type: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  alias: string
}
interface IAuthorId {
  id: number
  name: string
  rank: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  motto: string
  avatar: string
  liked: string
  viewed: string
}
interface ITagIds {
  id: number
  tag: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  alias: string
}
interface IColumId {
  id: number
  column: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover: string
  describe: string
}

```


