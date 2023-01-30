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
  error?: boolean
}
export {
  IArticleItem,
}
