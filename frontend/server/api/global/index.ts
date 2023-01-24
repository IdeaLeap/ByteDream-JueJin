import { useGraphql } from '~~/composables/graphql'
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
interface IArticleAd {
  title: string
  author: string
  summary: string
  cover: string
  url: string
}
interface IGlobal {
  gadgets: IGadget
  links: ILinksItem[]
  ads: IAdsItem[]
  footers: IFootersItem[]
  articleAds: IArticleAd
}
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
  return (await useGraphql(reqQuery)).global
})
