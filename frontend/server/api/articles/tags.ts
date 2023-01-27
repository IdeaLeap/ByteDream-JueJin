import { useGraphql } from '~~/composables/useGraphql'
interface ITagItem {
  tag: string
}
export default defineEventHandler(async (event): Promise<ITagItem[]> => {
  const query = getQuery(event)
  let reqQuery = `query{
    tags{
      data{
        attributes{
          tag
        }
      }
    }
  }`
  if (JSON.stringify(query) !== '{}' && !!query.tags) {
    const tags = JSON.parse(query.tags as string)
    let tagQuery = ''
    for (let i = 0; i < tags.length; i++)
      tagQuery += `{ tagIds: { tag: { eq: "${tags[i]}" } } },`
    reqQuery = `query {
      articles(
        filters:{
          or: [${tagQuery}]
        }
      ){
        data{
          id
          attributes{
            title
            liked
            commented
          }
        }
      }
    }`
    return (await useGraphql(reqQuery)).articles.data
  }

  return (await useGraphql(reqQuery)).tags.data
})
