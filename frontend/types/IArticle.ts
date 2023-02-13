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
  alias: string
}

interface IType {
  type: string
  alias: string
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
interface IArticle {
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
  columId: { data: IColumn[] }
  summary: string
}
export {
  IArticle,
  IColumn,
}
