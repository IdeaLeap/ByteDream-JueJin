interface IAuthor {
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
