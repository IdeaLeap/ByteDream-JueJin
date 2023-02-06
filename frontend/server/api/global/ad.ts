import { useGraphql } from '~~/utils/useGraphql'
import type { IArticleAd } from '~~/types/IGlobal'
export default defineEventHandler(async (): Promise<IArticleAd> => {
  const reqQuery = `query{
    global{
      data{
        attributes{
          articleAds{
            title
            author
            summary
            cover
            url
          }
        }
      }
    }
  }`
  return (await useGraphql(reqQuery)).global.articleAds
})
