import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { NextPage } from 'next'

import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import PostHeader from '../components/page/header'
import PostTitle from '../components/page/title'
import PostBody from '../components/page/body'

import { getPageBySlug, getAllPages } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import PageType from '../types/page'

type Props = {
  page: PageType
  pages: PageType[]
  preview?: boolean
}

const Page: NextPage<Props> = ({ page, pages, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview} pages={pages}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{page.title} | UCCcn</title>
              <meta property="og:image" content={page.ogImage.url} />
            </Head>
            <PostHeader
              title={page.title}
              date={page.date}
              author={page.author}
            />
            <PostBody content={page.content} />
          </article>
        )}
      </Container>
    </Layout>
  )
}

export default Page

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const pages = getAllPages(['title', 'slug'])

  const page = getPageBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage'
  ])
  const content = await markdownToHtml(page.content || '')

  return {
    props: {
      pages,
      page: {
        ...page,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const pages = getAllPages(['slug'])

  return {
    paths: pages.map(page => {
      return {
        params: {
          slug: page.slug
        }
      }
    }),
    fallback: false
  }
}
