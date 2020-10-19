import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import { getAllPages } from '../lib/api'
import Post from '../types/page'

type Props = {
  allPages: Post[]
}

const Index = ({ allPages }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>UCCcn</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPages = getAllPages([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPages }
  }
}
