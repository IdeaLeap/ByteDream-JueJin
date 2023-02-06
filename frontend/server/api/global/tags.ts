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
