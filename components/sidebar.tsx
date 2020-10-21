import Link from 'next/link'
import PageType from '../types/page'

type Props = {
  pages: PageType[]
}

const Sidebar: React.FunctionComponent<Props> = ({ pages }: Props) => (
  <aside className="flex flex-col w-1/5 min-h-screen text-center">
    <nav className="sticky top-0">
      <ul className="mt-32 text-2xl">
        <li>
          <Link href="/">
            <a>首頁</a>
          </Link>
        </li>
        {pages.map(page => (
          <li key={page.slug}>
            <Link href={`/${page.slug}`}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)

export default Sidebar
