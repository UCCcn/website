import PageTitle from './title'
import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import Author from '../../types/author'

type Props = {
  title: string
  date?: string
  author: Author
}

const PageHeader: React.FunctionComponent<Props> = ({
  title,
  date,
  author
}: Props) => (
  <>
    <PageTitle>{title}</PageTitle>
    <div className="hidden md:block md:mb-12">
      <Avatar name={author.name} picture={author.picture} />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="block mb-6 md:hidden">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      {date ? (
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      ) : null}
    </div>
  </>
)

export default PageHeader
