import type { ISearch } from '~~/types/ISearch'
export default defineEventHandler(async (event): Promise<ISearch> => {
  const { serverMeilisearchClient } = event.context
  const query = getQuery(event)
  const result = await serverMeilisearchClient.index('article').search(query?.keyword || '')
  return result
})
