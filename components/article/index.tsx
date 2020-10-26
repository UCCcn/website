import { useEffect } from 'react'

import ArticleHeader from './header'
import ArticleBody from './body'

export type ArticleType = {
  slug: string
  title: string
  date?: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

type SetScrollPosition = (scrollY: number) => void

type Props = {
  articles: ArticleType[]
  onScroll: SetScrollPosition
}

const Articles: React.FunctionComponent<Props> = ({
  articles,
  onScroll
}: Props) => {
  useEffect(
    () => window.addEventListener('scroll', () => onScroll(window.scrollY)),
    []
  )

  return (
    <>
      {articles.map(article => (
        <article key={article.slug} className="mb-32">
          <ArticleHeader
            slug={article.slug}
            title={article.title}
            date={article.date}
          />
          <ArticleBody content={article.content} />
        </article>
      ))}
    </>
  )
}

export default Articles
