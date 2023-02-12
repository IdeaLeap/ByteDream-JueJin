import { useGraphql } from '~~/utils/useGraphql'
import type { liked } from '~/types/IMutation'
const token = useRuntimeConfig().strapi_token
export default defineEventHandler(async (event): Promise<liked> => {
  const query = getQuery(event)
  const id = query.id
  if (!id) {
    return {
      code: 999,
      message: 'what\'s your article id?',
    }
  }
  const reqQuery = `query{
    article(id : ${id}){
      data{
        id
        attributes{
          liked
          authorId{
            data{
              id
              attributes{
                liked
              }
            }
          }
        }
      }
    }
  }`
  const articleData = (await useGraphql(reqQuery)).article
  await useGraphql(`mutation updateArticle {
    updateArticle(id: ${id}, data: { liked: ${++articleData.liked} }) {
      data {
        id
        attributes {
          liked
        }
      }
    }
  }`, token)
  await useGraphql(`mutation updateAuthor {
    updateAuthor(id: ${articleData.authorId.id}, data: { liked: ${++articleData.authorId.liked} }) {
      data {
        id
        attributes {
          liked
        }
      }
    }
  }`, token)
  return {
    code: 200,
    message: 'success',
    data: {
      liked: articleData.liked,
    },
  }
})
