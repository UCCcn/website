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
    <aside className="flex flex-col w-1/5 text-center">
      <nav className="sticky top-0 mt-32 ml-16 border-uccYellow border-l-24">
        <ul className="mt-32 space-y-2 text-2xl font-medium">
          <li>
            <Link href="/">
              <a className={cn({ 'shadow-uccYellow': !pageSlug })}>首頁</a>
            </Link>
          </li>
          {pages.map(page => (
            <li key={page.slug}>
              <Link href={`/${page.slug}`}>
                <a
                  className={cn({
                    'shadow-uccYellow': page.slug === pageSlug
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
