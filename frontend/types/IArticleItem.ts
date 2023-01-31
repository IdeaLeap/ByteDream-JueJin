interface IAuthor {
  name: string
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
interface IArticleAd {
  title: string
  author: string
  summary: string
  cover: string
  url: string
}
export {
  IArticleItem,
  IArticleAd,
  ITagItem,
}
