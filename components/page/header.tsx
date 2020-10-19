import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import CoverImage from '../cover-image'
import PageTitle from './title'
import Author from '../../types/author'

type Props = {
  title: string
  coverImage?: string
  date?: string
  author: Author
}

const PageHeader = ({ title, coverImage, date, author }: Props) => (
  <>
    <PageTitle>{title}</PageTitle>
    <div className="hidden md:block md:mb-12">
      <Avatar name={author.name} picture={author.picture} />
    </div>
    {coverImage ? (
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    ) : null}
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
