import { useGraphql } from '~~/composables/graphql'
export default defineEventHandler(async () => {
  const reqQuery = `query{
    authors{
      data{
        id
        attributes{
          name
          img
          uid
          scr
          rank
        }
      }
    }
  }`
  return (await useGraphql(reqQuery)).authors.data
})
