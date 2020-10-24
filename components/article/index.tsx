import ArticleHeader from './header'
import ArticleBody from './body'

export type ArticleType = {
  slug: string
  title: string
  date?: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

type Props = {
  articles: ArticleType[]
}

const Articles: React.FunctionComponent<Props> = ({ articles }: Props) => (
  <>
    {articles.map(article => (
      <article key={article.slug} className="mb-32">
        <ArticleHeader
          slug={article.slug}
          title={article.title}
          date={article.date}
        />
        <ArticleBody content={article.content} />
      </article>
    ))}
  </>
)

export default Articles
