import { useGraphql } from '~~/utils/useGraphql'
import type { ITagItem } from '~~/types/IType'

export default defineEventHandler(async (event): Promise<ITagItem[]> => {
  const query = getQuery(event)
  const type = query.type || ''// all、others
  const reqQuery = `query {
    tags(
          filters:{
            type: {type:{eq:"${type}"}}
          }
          pagination: { pageSize: 999 }
        ) {
      data {
        id
        attributes {
          tag
          alias
        }
      }
    }
  }
  `
  return (await useGraphql(reqQuery)).tags.data
})
