import { useGraphql } from '~~/utils/useGraphql'
interface IAuthorListItem {
  name: string
  motto: string
  avatar: string
  rank: Number
}
export default defineEventHandler(async (): Promise<IAuthorListItem[]> => {
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
  return (await useGraphql(reqQuery)).authors.data
})
