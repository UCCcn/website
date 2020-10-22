import Link from 'next/link'
import cn from 'classnames'
import PageType from '../types/page'

type Props = {
  pages: PageType[]
  pageSlug?: string
}

const Sidebar: React.FunctionComponent<Props> = ({
  pages,
  pageSlug
}: Props) => (
  <>
    <aside className="flex flex-col w-1/4 text-center">
      <nav className="sticky top-0 mt-32 ml-16 border-ucc-yellow border-l-32">
        <ul className="mt-48 space-y-4 text-4xl font-medium">
          {[{ title: '首頁', slug: '' }].concat(pages).map(page => (
            <li key={page.slug} className="mr-8">
              <Link href={`/${page.slug}`}>
                <a
                  className={cn({
                    'shadow-ucc-yellow':
                      page.slug === pageSlug ||
                      (page.slug === '' && pageSlug === undefined)
                  })}>
                  {page.title}
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
