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
export interface IArticleAd {
  title: string
  author: string
  summary: string
  cover: string
  url: string
}
export interface IGlobal {
  gadgets: IGadget
  links: ILinksItem[]
  ads: IAdsItem[]
  footers: IFootersItem[]
}
