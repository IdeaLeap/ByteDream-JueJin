import { useGraphql } from '~~/composables/useGraphql'

interface IArticleItem {
  id: string
  title: string
}
export default defineEventHandler(async (event): Promise<IArticleItem[]> => {
  const id = decodeURIComponent(event.context.params.id)
  const reqQuery = `query {
    articles(filters:{columId:{column:{eq:"${id}"}}}){
      data{
        id
        attributes{
          title
        }
      }
    }
  }`
  return (await useGraphql(reqQuery)).articles.data
})
