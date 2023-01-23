import { useGraphql } from '~~/composables/graphql'
import { apiResponse } from '~~/types/apiTypes'
interface ITypeItem {
  type: string
}
export default defineEventHandler(async () => {
  const reqQuery = `query{
    types{
      data{
        attributes{
          type
        }
      }
    }
  }`
  return apiResponse<ITypeItem[]>((await useGraphql(reqQuery)).types.data)
})
