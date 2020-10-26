import { createContext, useState } from 'react'
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import Meta from '../components/meta'
import Sidebar from '../components/sidebar'
import Container from '../components/container'
import Landing from '../components/landing'
import Articles, { ArticleType } from '../components/article/'
import Footer from '../components/footer/'

import { getAllArticles } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles([
    'slug',
    'title',
    'date',
    'ogImage',
    'content'
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

const PositionContext = createContext(0)

const Index: NextPage<Props> = ({ articles }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const calcSidebarPosition = (initialPosition: number): number => {
    const middle = window.innerHeight / 2
    const position = middle - initialPosition / 2
    return position > 0 ? position : 0
  }

  return (
    <>
      <Head>
        <title>UCCcn</title>
      </Head>
      <Meta />
      <div className="flex flex-row">
        <PositionContext.Provider value={calcSidebarPosition(scrollPosition)}>
          <Sidebar articles={articles} context={PositionContext} />
          <main className="flex-grow">
            <Container>
              <Landing />
              <Articles articles={articles} onScroll={setScrollPosition} />
            </Container>
          </main>
        </PositionContext.Provider>
      </div>
      <Footer />
    </>
  )
}

export default Index
