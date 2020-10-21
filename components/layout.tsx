import Meta from './meta'
import Alert from './alert'
import Sidebar from './sidebar'
import Footer from './footer/'

import PageType from '../types/page'

type Props = {
  preview?: boolean
  pages: PageType[]
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({
  preview,
  pages,
  children
}: Props) => (
  <>
    <Meta />
    <div className="flex flex-row">
      {preview ? <Alert /> : null}
      <Sidebar pages={pages} />
      <main className="flex-grow">{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
