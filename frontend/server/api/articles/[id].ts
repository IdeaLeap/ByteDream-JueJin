import { useGraphql } from '~~/composables/useGraphql'
import type { IArticle } from '~~/types/IArticle'
export default defineEventHandler(async (event): Promise<IArticle> => {
  const id = event.context.params.id
  const reqQuery = `query{
    article(id : ${id}){
      data{
        attributes{
          title
          viewed
          liked
          shared
          commented
          content
          cover
          createdAt
          updatedAt
          authorId{
            data{
              attributes{
                name
                motto
                avatar
                rank
                liked
                viewed
              }
            }
          }
          tagIds{
            data{
              attributes{
                tag
              }
            }
          }
          typeId{
            data{
              attributes{
                type
              }
            }
          }
          columId{
            data{
              attributes{
                column
                articles{
                  data{
                    id
                    attributes{
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
}`
  return await useGraphql(reqQuery)
})
