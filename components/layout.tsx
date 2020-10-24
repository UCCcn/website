import Meta from './meta'
import Sidebar from './sidebar'
import Footer from './footer/'
import { ArticleType } from './article/'

type Props = {
  articles: ArticleType[]
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({
  articles,
  children
}: Props) => (
  <>
    <Meta />
    <div className="flex flex-row">
      <Sidebar articles={articles} />
      <main className="flex-grow">{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
