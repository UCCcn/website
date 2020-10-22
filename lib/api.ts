import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import PageType from '../types/page'
type PageTypeKey = keyof PageType
type Fields = Partial<keyof PageType>[]

const pageContentDirectory = path.join(process.cwd(), '_contents')

const getPageSlugs = (): string[] => fs.readdirSync(pageContentDirectory)

export const getPageBySlug = (slug: string, fields: Fields = []): PageType => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(pageContentDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = Object.fromEntries<PageType[PageTypeKey]>(
    fields.map((field): [PageTypeKey, string | undefined] => [
      field,
      field === 'slug'
        ? realSlug
        : field === 'content'
        ? content
        : data[field] !== undefined
        ? data[field]
        : undefined
    ])
  ) as PageType

  return items
}

export const getAllPages = (fields: Fields = []): PageType[] => {
  const slugs = getPageSlugs()
  const posts = slugs.map((slug): PageType => getPageBySlug(slug, fields))
  // sort posts by date in descending order
  // .sort((post1, post2): -1 | 1 => (post1.date > post2.date ? -1 : 1))
  return posts
}
