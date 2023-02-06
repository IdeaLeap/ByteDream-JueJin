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
  else // 超过一年
    ans = `${(duration / 60 / 24 / 30 / 365).toFixed(0)}年前`
  return ans
}
export const useArtlist = (data: IArticleItem[]) => useState('artlist', () => [...data] as IArticleItem[])
export const useArtlistPath = (path?: string | undefined) => useState('artlistPath', () => {
  if (path === undefined)
    return ''
  return path
})
export const usePath = (route?: any): any => {
  if (!('all' in route.params)) {
    return {
      type: '',
      tag: '',
    }
  }
  if (route.params?.all.length === 2) {
    return {
      type: route.params.all[0],
      tag: route.params.all[1],
    }
  }

  if (route.params?.all.length === 1) {
    return {
      type: route.params.all[0],
      tag: '',
    }
  }

  if (route.params?.all.length === 0) {
    return {
      type: '',
      tag: '',
    }
  }
}

export const useFetchPostData = async (
  type?: string,
  sort: any = 'recommended',
  pagenum = 1,
  tag?: string,
): Promise<IArticleItem[]> => {
  type = type || '/'
  const { data } = await useFetch(`/api/articles/list?sort=${sort}&type=${type.replace('/', '')}&pageNum=${pagenum}&tag=${tag || ''}`)
  // 数据内容
  return data.value
}
