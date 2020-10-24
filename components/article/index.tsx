import ArticleHeader from './header'
import ArticleBody from './body'
import ArticleType from '../../types/article'

type Props = {
  articles: ArticleType[]
}

const Articles: React.FunctionComponent<Props> = ({ articles }: Props) => (
  <>
    {articles.map(article => (
      <article key={article.slug} className="mb-32">
        <ArticleHeader
          title={article.title}
          date={article.date}
          author={article.author}
        />
        <ArticleBody content={article.content} />
      </article>
    ))}
  </>
)

export default Articles
