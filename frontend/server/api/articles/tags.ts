import { useGraphql } from '~~/composables/graphql'
interface ITagItem {
  tag: string
}
export default defineEventHandler(async (): Promise<ITagItem[]> => {
  const reqQuery = `query{
    tags{
      data{
        attributes{
          tag
        }
      }
    }
  }`
  return (await useGraphql(reqQuery)).tags.data
})
