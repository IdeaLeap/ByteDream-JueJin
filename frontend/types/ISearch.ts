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
