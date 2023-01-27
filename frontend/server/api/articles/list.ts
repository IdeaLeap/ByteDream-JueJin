import { useGraphql } from '~~/composables/useGraphql'
import { useTime } from '~~/composables/useTime'
interface IAuthor {
  name: string
}

interface ITagItem {
  tag: string
}

interface IArticleItem {
  id: string
  title: string
  viewed: number
  liked: number
  commented: number
  summary: string
  cover: string
  createdAt: string
  authorId: IAuthor
  tagIds: { data: ITagItem[] }
}
export default defineEventHandler(async (event): Promise<IArticleItem[]> => {
  const query = getQuery(event)
  const sort = query.sort || ''// recommended、newest、hottest(全部)、three_days_hottest、weekly_hottest、monthly_hottest
  const strategy = ['', '']
  switch (sort) {
    case 'recommended':
      strategy[1] = 'sort: "shared:desc"'
      break
    case 'newest':
      strategy[1] = 'sort: "createdAt:desc"'
      break
    case 'hottest':
      strategy[1] = 'sort: "viewed:desc"'
      break
    case 'three_days_hottest':
      strategy[0] = `{createdAt: { gte: "${useTime(3)}T00:00:00.000Z" }}`
      strategy[1] = 'sort: "viewed:desc"'
      break
    case 'weekly_hottest':
      strategy[0] = `{createdAt: { gte: "${useTime(7)}T00:00:00.000Z" }}`
      strategy[1] = 'sort: "viewed:desc"'
      break
    case 'monthly_hottest':
      strategy[0] = `{createdAt: { gte: "${useTime(30)}T00:00:00.000Z" }}`
      strategy[1] = 'sort: "viewed:desc"'
      break
  }
  const type = query.type || ''// all、others
  const pageNum = query.pageNum || '1'// 1 to ∞
  const reqQuery = `query{
    articles(
      filters: { 
        and:[
          ${strategy[0]},
          {typeId: { type: { ${type ? `eq: "${type}"` : ''} } }}
        ]
      }
      ${strategy[1]}
      pagination: { page: ${pageNum || '1'}, pageSize: 20 }
    ){
      data{
        id
        attributes{
          title
          viewed
          liked
          commented
          summary
          cover
          createdAt
          authorId{
            data{
              attributes{
                name
              }
            }
          }
          tagIds{
            data{
              attributes{
                tag
              }
            }
          }
        }
      }
    }
}`
  return (await useGraphql(reqQuery)).articles.data
})
