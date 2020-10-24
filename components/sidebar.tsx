import Link from 'next/link'
import cn from 'classnames'
import { ArticleType } from './article/'

type Props = {
  articles: ArticleType[]
}

const Sidebar: React.FunctionComponent<Props> = ({ articles }: Props) => (
  <>
    <aside className="flex flex-col w-1/4 text-center">
      <nav className="sticky top-0 mt-32 ml-16 border-ucc-yellow border-l-32">
        <ul className="mt-48 space-y-4 text-4xl font-medium">
          {[{ title: '首頁', slug: '' }].concat(articles).map(article => (
            <li key={article.slug} className="mr-8">
              <Link href={`/#${article.slug}`}>
                <a
                  className={cn({
                    'shadow-ucc-yellow': article.slug === ''
                  })}>
                  {article.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    <style jsx>{`
      aside {
        min-height: calc(100vh - 225px);
      }
    `}</style>
  </>
)

export default Sidebar
