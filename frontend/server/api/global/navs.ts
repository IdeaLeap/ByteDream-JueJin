import { useGraphql } from '~~/composables/graphql'
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
