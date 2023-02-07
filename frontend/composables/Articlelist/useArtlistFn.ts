import type { IArticleItem } from '~~/types/IArticleItem'
export const formatTime = (createdAt: string): string => {
  const created = new Date(createdAt)
  const now = new Date()
  const duration = (now.getTime() - created.getTime()) / 1000 / 60
  let ans = '刚刚'
  if (duration < 60) // 一小时内
    ans = `${(duration).toFixed(0)}分钟前`
  else if (duration < 60 * 24) // 一天内
    ans = `${(duration / 60).toFixed(0)}小时前`
  else if (duration < 60 * 24 * 30) // 一个月内
    ans = `${(duration / 60 / 24).toFixed(0)}天前`
  else if (duration < 60 * 24 * 30 * 365) // 一年内
    ans = `${(duration / 60 / 24 / 30).toFixed(0)}月前`
  else if (duration >= 60 * 24 * 30 * 365) // 超过一年
    ans = `${(duration / 60 / 24 / 30 / 365).toFixed(0)}年前`
  return ans
}
export const useArtlist = (data: IArticleItem[]) => useState<IArticleItem[]>('artlist', () => [...data])
export const useFetchPostData = async (
  params?: any,
  sort: any = 'recommended',
  pagenum = 1,
): Promise<IArticleItem[]> => {
  const url = `/api/articles/list?sort=${sort}&type=${params?.type || ''}&pageNum=${pagenum}&tag=${params?.tag || ''}`
  const { data } = await useFetch(url)
  // 数据内容
  return data.value
}
