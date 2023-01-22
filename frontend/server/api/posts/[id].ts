import { useGraphql } from '~~/composables/graphql'
export default defineEventHandler((event) => {
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
  return useGraphql(reqQuery)
})
