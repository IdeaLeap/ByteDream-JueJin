import { useGraphql } from '~~/utils/useGraphql'
import type { IType } from '~~/types/IType'

export default defineEventHandler(async (event): Promise<IType> => {
  const query = getQuery(event)
  const page = query?.page || 1
  const reqQuery = `query{
    types(pagination: { page:${page},pageSize: 9 }){
      data{
        attributes{
          type
          alias
          tags{
            data{
              id
              attributes{
                tag
                alias
              }
            }
          }
        }
      }
    meta{
      pagination {
        pageCount
        total
      }
    }
    }
  }`
  return (await useGraphql(reqQuery)).types
})
