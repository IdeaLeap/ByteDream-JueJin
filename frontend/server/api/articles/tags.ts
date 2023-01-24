import { useGraphql } from '~~/composables/graphql'
import { apiResponse } from '~~/types/apiTypes'
interface ITagItem {
  tag: string
}
export default defineEventHandler(async () => {
  const reqQuery = `query{
    tags{
      data{
        attributes{
          tag
        }
      }
    }
  }`
  return apiResponse<ITagItem[]>((await useGraphql(reqQuery)).tags.data)
})
