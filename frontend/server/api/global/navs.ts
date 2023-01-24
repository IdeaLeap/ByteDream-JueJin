import { useGraphql } from '~~/composables/graphql'
import { apiResponse } from '~~/types/apiTypes'
interface INav {
  name: string
  url: string
  badge?: string
}
export default defineEventHandler(async () => {
  const reqQuery = `query{
    global{
      data{
        attributes{
          navs{
            nav
            url
            badge
          }
        }
      }
    }
  }`
  return apiResponse<INav[]>((await useGraphql(reqQuery)).global.data.navs)
})
