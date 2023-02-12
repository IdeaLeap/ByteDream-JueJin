import { useGraphql } from '~~/utils/useGraphql'
import type { IGlobal } from '~~/types/IGlobal'
export default defineEventHandler(async (): Promise<IGlobal> => {
  const reqQuery = `query{
    global{
      data{
        attributes{
          gadgets{
            title
            subtitle
            qrcode
            url
          }
          links{
            title
            icon
            url
          }
          ads{
            ad
            img
            url
          }
          footers{
            footer
            url
            describe
            icon
          }
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
  return (await useGraphql(reqQuery)).global
})
