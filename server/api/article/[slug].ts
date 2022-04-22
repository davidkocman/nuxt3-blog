import articles from '~/data/articles.json'
import Article from '~/types/Article'

export default defineEventHandler((event) => {
  return articles.find(
    (article: Article) => article.slug === event.context.params.slug
  )
})
