import ArticleTitle from './title'
import DateFormatter from './date-formatter'

type Props = {
  slug: string
  title: string
  date?: string
}

const ArticleHeader: React.FunctionComponent<Props> = ({
  slug,
  title,
  date
}: Props) => (
  <>
    <ArticleTitle slug={slug}>{title}</ArticleTitle>
    <div className="max-w-2xl mx-auto">
      {date ? (
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      ) : null}
    </div>
  </>
)

export default ArticleHeader
