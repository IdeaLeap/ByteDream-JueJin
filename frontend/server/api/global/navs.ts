import { useGraphql } from '~~/utils/useGraphql'
import type { INavItem } from '~~/types/INav'
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
