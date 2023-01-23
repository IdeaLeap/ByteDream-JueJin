import { useGraphql } from '~~/composables/graphql'
import { apiResponse } from '~~/types/apiTypes'
interface IGadget {
  title: string
  subscribe: string
  qrcode: string
  url: string
}
interface ILinksItem {
  title: string
  icon: string
  url: string
}
interface IAdsItem {
  ad: string
  img: string
}
interface IFootersItem {
  footer: string
  url?: string
  describe?: string
  icon?: string
}
interface IGlobal {
  gadgets: IGadget[]
  links: ILinksItem[]
  ads: IAdsItem[]
  footers: IFootersItem[]
}
export default defineEventHandler(async () => {
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
              }
              footers{
                footer
                url
                describe
                icon
              }
            }
          }
        }
      }`
  return apiResponse<IGlobal>((await useGraphql(reqQuery)).global)
})
