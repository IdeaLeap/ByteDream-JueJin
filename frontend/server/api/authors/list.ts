import { useGraphql } from '~~/utils/useGraphql'
interface IAuthorListItem {
  name: string
  motto: string
  avatar: string
  rank: Number
}
export default defineEventHandler(async (event): Promise<IAuthorListItem[]> => {
  const query = getQuery(event)
  const page = query?.page || 1
  const reqQuery = `query{
        authors(
          pagination: { page: ${page}, pageSize: 4 }
          sort: "rank:desc"
          ){
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
  return (await useGraphql(reqQuery)).authors.data
})
