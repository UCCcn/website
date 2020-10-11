import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => (
  <>
    <Meta />
    <div className="min-h-screen">
      {preview ? <Alert /> : null}
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
