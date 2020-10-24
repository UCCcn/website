import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import ArticleType from '../types/article'
type ArticleTypeKey = keyof ArticleType
type Fields = Partial<keyof ArticleType>[]

const articleContentDirectory = path.join(process.cwd(), '_contents')

const getArticleSlugs = (): string[] => fs.readdirSync(articleContentDirectory)

export const getArticleBySlug = (
  slug: string,
  fields: Fields = []
): ArticleType => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(articleContentDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = Object.fromEntries<ArticleType[ArticleTypeKey]>(
    fields.map((field): [ArticleTypeKey, string | undefined] => [
      field,
      field === 'slug'
        ? realSlug
        : field === 'content'
        ? content
        : data[field] !== undefined
        ? data[field]
        : undefined
    ])
  ) as ArticleType

  return items
}

export const getAllArticles = (fields: Fields = []): ArticleType[] => {
  const slugs = getArticleSlugs()
  const articles = slugs.map(
    (slug): ArticleType => getArticleBySlug(slug, fields)
  )
  // sort posts by date in descending order
  // .sort((post1, post2): -1 | 1 => (post1.date > post2.date ? -1 : 1))
  return articles
}
