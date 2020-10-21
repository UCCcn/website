import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta: React.FunctionComponent = () => (
  <Head>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    <meta name="description" content="UCCcn 主页" />
    <meta property="og:image" content={HOME_OG_IMAGE_URL} />
  </Head>
)

export default Meta
