import { useGraphql } from '~~/composables/graphql'
export default defineEventHandler(() => {
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
  return useGraphql(reqQuery)
})
