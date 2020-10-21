import Head from 'next/head'
import { NextPage } from 'next'

import Layout from '../components/layout'
import Container from '../components/container'
import Landing from '../components/landing'

import { getAllPages } from '../lib/api'
import PageType from '../types/page'

type Props = {
  pages: PageType[]
}

const Index: NextPage<Props> = ({ pages }: Props) => {
  return (
    <Layout pages={pages}>
      <Head>
        <title>UCCcn</title>
      </Head>
      <Container>
        <Landing />
      </Container>
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const pages = getAllPages(['title', 'slug'])

  return {
    props: { pages }
  }
}
