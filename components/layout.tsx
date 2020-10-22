import Meta from './meta'
import Sidebar from './sidebar'
import Footer from './footer/'

import PageType from '../types/page'

type Props = {
  pages: PageType[]
  pageSlug?: string
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({
  pages,
  pageSlug,
  children
}: Props) => (
  <>
    <Meta />
    <div className="flex flex-row">
      <Sidebar pages={pages} pageSlug={pageSlug} />
      <main className="flex-grow">{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
