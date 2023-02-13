interface IAuthor {
  id: string
  name: string
  motto: string
  avatar: string
  rank: Number
  liked: Number
  viewed: Number
}
interface IArticleAd {
  title: string
  author: string
  summary: string
  cover: string
  url: string
}
interface ITagItem {
  tag: string
  alias: string
}
interface ICatalogue {
  level: number
  text: string
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
export {
  IArticleItem,
  ITagItem,
  IArticleAd,
  IAuthor,
  ICatalogue,
  IAuthor,
}
