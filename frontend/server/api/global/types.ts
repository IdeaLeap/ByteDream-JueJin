import { useGraphql } from '~~/composables/graphql'
interface ITypeItem {
  type: string
}
export default defineEventHandler(async (): Promise<ITypeItem[]> => {
  const reqQuery = `query{
    types{
      data{
        attributes{
          type
        }
      }
    }
  }`
  return (await useGraphql(reqQuery)).types.data
})
