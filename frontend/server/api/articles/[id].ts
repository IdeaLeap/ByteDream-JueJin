import { useGraphql } from '~~/composables/graphql'
import { apiResponse } from '~~/types/apiTypes'
interface IArticleItem {
  name: string
  motto: string
  avatar: string
  rank: Number
}
export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const reqQuery = `query{
    post(id:${id}){
      data{
        id,
        attributes{
          title,
          author,
          body,
          viewsCount,
          articleHero,
          avatar,
          createdAt,
          updatedAt,
          rank
        }
      }
    }
  }`
  return apiResponse<IArticleItem[]>(await useGraphql(reqQuery))
})
