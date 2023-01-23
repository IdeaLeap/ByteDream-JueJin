import { useGraphql } from '~~/composables/graphql'
import { apiResponse } from '~~/types/apiTypes'
interface IAuthorListItem {
  name: string
  motto: string
  avatar: string
  rank: Number
}
export default defineEventHandler(async () => {
  const reqQuery = `query{
        authors(pagination: { page: 1, pageSize: 3 }){
          data{
            attributes{
              name
              motto
              avatar
              rank
            }
          }
        }
      }`
  return apiResponse<IAuthorListItem[]>((await useGraphql(reqQuery)).authors.data)
})
