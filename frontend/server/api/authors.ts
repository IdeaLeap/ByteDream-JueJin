import { useGraphql } from '~~/composables/graphql'
export default defineEventHandler(async () => {
  const reqQuery = `query{
        authors(pagination: { page: 1, pageSize: 3 }){
          data{
            id
            attributes{
              name
              describe
              img
              rank
              uid
            }
          }
        }
      }`
  return (await useGraphql(reqQuery)).authors.data
})
