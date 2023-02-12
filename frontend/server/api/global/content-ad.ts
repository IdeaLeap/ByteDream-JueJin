import { useGraphql } from '~~/utils/useGraphql'
import type { IAdsItem } from '~~/types/IGlobal'
export default defineEventHandler(async (): Promise<IAdsItem> => {
  const reqQuery = `query{
    global{
      data{
        attributes{
          contentAds{
            ad
            img
            url
          }
        }
      }
    }
  }`
  return (await useGraphql(reqQuery)).global.contentAds
})
