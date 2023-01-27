import type { Ref } from 'vue'
import type { IArticleItem, IPanel } from '~~/types/IPanel'
function fixPoint(num: number) {
  return num.toFixed(0)
}
function formatTime(createdAt: string) {
  const created = new Date(createdAt)
  const now = new Date()
  const duration = (now.getTime() - created.getTime()) / 1000 / 60
  let ans = '刚刚'
  // 年月日时分秒
  if (duration < 60) // 一小时内
    ans = `${fixPoint(duration)}分钟前`
  else if (duration < 60 * 24) // 一天内
    ans = `${fixPoint(duration / 60)}小时前`
  else if (duration < 60 * 24 * 30) // 一个月内
    ans = `${fixPoint(duration / 60 / 24)}天前`
  else if (duration < 60 * 24 * 30 * 365) // 一年内
    ans = `${fixPoint(duration / 60 / 24 / 30)}月前`
  else // 超过一年
    ans = `${fixPoint(duration / 60 / 24 / 30 / 365)}年前`
  return ans
}
function formatArtlist(artlistData: Ref<IArticleItem[]>): IPanel[] {
  return artlistData.value.map((item: IArticleItem) => {
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
      duration: formatTime(item.createdAt),
      tagIds,
      name: item.authorId.name,
    }
  })
}
export const useArtlist = (data: IPanel[]) => useState('artlist', () => [...data] as IPanel[])
export const useArtlistPath = (path?: string | undefined) => useState('artlistPath', () => {
  if (path === undefined)
    return ''
  return path
})
// TODO: 请求数据
export default async (type?: string, sort?: string, pagenum = 1): Promise<IPanel[]> => {
  // 接口
  if (type === undefined)
    type = ''
  if (sort === undefined)
    sort = 'recommended'
  const { data } = await useFetch(`/api/articles/list?sort=${sort}&type=${type}&pageNum=${pagenum}`)
  // 数据内容
  return formatArtlist(data)
}
