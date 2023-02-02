import { useGraphql } from '~~/utils/useGraphql'
import type { ITypeItem } from '~~/types/IType'

export default defineEventHandler(async (): Promise<ITypeItem[]> => {
  const reqQuery = `query{
    types{
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
    }
  }`
  return (await useGraphql(reqQuery)).types.data
})
