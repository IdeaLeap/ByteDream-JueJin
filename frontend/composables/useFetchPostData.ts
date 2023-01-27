import type { IArticleItem } from '~~/types/IPanel'
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
export const useArtlist = (data: IPanel[]) => useState('artlist', () => [...data] as IPanel[])
export const useArtlistPath = (path?: string | undefined) => useState('artlistPath', () => {
  if (path === undefined)
    return ''
  return path
})
// TODO: 请求数据
export default async (type?: string, sort = 'recommended', pagenum = 1): Promise<IPanel[]> => {
  // 接口
  const { data: fetchData } = await useFetch(`/api/articles/list?sort=${sort}&type=${type}&pageNum=${pagenum}`)
  const data = fetchData.value.articles.data
  const value: IPanel[] = data.map((item: IArticleItem) => {
    const tagIds: string[] = []
    item.tagIds.data.forEach((sub) => {
      tagIds.push(sub.tag)
    })
    return {
      id: item.id,
      title: item.title,
      topicHeat: [item.viewed, item.liked, item.commented],
      summary: item.summary,
      cover: item.cover,
      duration: item.createdAt,
      tagIds,
      name: item.authorId.name,
    }
  })
  // 数据内容
  return value
}
