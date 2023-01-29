import { useGraphql } from '~~/utils/useGraphql'
interface INavItem {
  name: string
  url: string
  badge?: string
}
export default defineEventHandler(async (): Promise<INavItem[]> => {
  const reqQuery = `query{
    global{
      data{
        attributes{
          navs{
            nav
            url
            badge
          }
        }
      }
    }
  }`
  return (await useGraphql(reqQuery)).global.navs
})
