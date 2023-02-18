import type { ISearch } from '~~/types/ISearch'
export default defineEventHandler(async (event): Promise<ISearch> => {
  const { serverMeilisearchClient } = event.context
  const query = getQuery(event)
  const result = await serverMeilisearchClient.index('article').search(query?.keyword || '')
  // 仅显示前十条
  if (result.estimatedTotalHits > 10)
    result.hits = result.hits.slice(0, 10)
  return result
})
