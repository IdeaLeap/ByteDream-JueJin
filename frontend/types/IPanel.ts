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
interface IPanel {
  id: string
  title: string
  topicHeat: number[]
  summary: string
  cover: string
  duration: string
  tagIds: string[]
  name: string
}
export {
  IArticleItem,
  IPanel,
}
