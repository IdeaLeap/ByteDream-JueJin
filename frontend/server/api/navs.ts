import { useGraphql } from '~~/composables/graphql'
export default defineEventHandler(async () => {
  const reqQuery = `query{
      navs{
        data{
          id
          attributes{
            name
            url
            tag
          }
        }
      }
    }`
  return (await useGraphql(reqQuery)).navs.data
})
