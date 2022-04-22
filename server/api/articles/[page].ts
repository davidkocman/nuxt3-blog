import articles from '~/data/articles.json'
import Article from '~/types/Article'

export default defineEventHandler((event) => {
  const result: Article[] = articles.filter((obj: Article) => {
    return obj.page == event.context.params.page
  })
  return result
})
