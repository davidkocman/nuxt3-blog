import ArticleContent from '~/types/ArticleContent'
export default interface Article {
  title: string
  slug: string
  heroImg: string
  rubric: string
  page: number
  pages: number
  perex: string
  content: ArticleContent[]
}
