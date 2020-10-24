import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import Layout from '../components/layout'
import Container from '../components/container'
import Landing from '../components/landing'
import Articles from '../components/article/'
import ArticleType from '../types/article'

import { getAllArticles } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles([
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage'
  ])

  const articleContents = articles.map(async article => {
    const content = await markdownToHtml(article.content || '')
    const tansfromedArticle: ArticleType = {
      ...article,
      content
    }

    return tansfromedArticle
  })

  return { props: { articles: await Promise.all(articleContents) } }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index: NextPage<Props> = ({ articles }: Props) => {
  return (
    <Layout articles={articles}>
      <Head>
        <title>UCCcn</title>
      </Head>
      <Container>
        <Landing />
        <Articles articles={articles} />
      </Container>
    </Layout>
  )
}

export default Index
