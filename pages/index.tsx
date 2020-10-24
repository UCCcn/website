import Head from 'next/head'
import { NextPage } from 'next'

import Layout from '../components/layout'
import Container from '../components/container'
import Landing from '../components/landing'
import ArticleHeader from '../components/article/header'
import ArticleBody from '../components/article/body'

import { getAllArticles } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import ArticleType from '../types/article'

type Props = {
  articles: ArticleType[]
}

const Index: NextPage<Props> = ({ articles }: Props) => {
  return (
    <Layout articles={articles}>
      <Head>
        <title>UCCcn</title>
      </Head>
      <Container>
        <Landing />
        {articles.map(article => (
          <article key={article.slug} className="mb-32">
            <ArticleHeader
              title={article.title}
              date={article.date}
              author={article.author}
            />
            <ArticleBody content={article.content} />
          </article>
        ))}
      </Container>
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
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

    return {
      ...article,
      content
    }
  })

  return { props: { articles: await Promise.all(articleContents) } }
}
