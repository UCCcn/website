import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/page/body'
import Header from '../components/header'
import PostHeader from '../components/page/header'
import Layout from '../components/layout'
import { getPageBySlug, getAllPages } from '../lib/api'
import PostTitle from '../components/page/title'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import PostType from '../types/page'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Page = ({ post, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | UCCcn</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
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
  const page = getPageBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])
  const content = await markdownToHtml(page.content || '')

  return {
    props: {
      post: {
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
