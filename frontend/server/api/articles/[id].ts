import { useGraphql } from '~~/utils/useGraphql'
import type { IArticle } from '~~/types/IArticle'
const updateViewed = async (type: string, id: string, viewedNum: number) => {
  await useGraphql(`mutation update${type} {
    update${type}(id: ${id}, data: { viewed: ${++viewedNum} }) {
      data {
        id
        attributes {
          viewed
        }
      }
    }
  }`, useRuntimeConfig().strapi_token)
}
export default defineEventHandler(async (event): Promise<IArticle> => {
  const id = event.context.params.id
  const reqQuery = `query{
    article(id : ${id}){
      data{
        id
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
          summary
          authorId{
            data{
              id
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
                alias
              }
            }
          }
          typeId{
            data{
              attributes{
                type
                alias
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
  const articleData = (await useGraphql(reqQuery)).article
  updateViewed('Article', id, articleData.viewed)
  updateViewed('Author', articleData.authorId.id, articleData.authorId.viewed)
  return articleData
})
