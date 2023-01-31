interface IAuthor {
  name: string
}
interface ITagItem {
  tag: string
  alias: string
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
}
