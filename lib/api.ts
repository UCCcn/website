import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const pageContentDirectory = join(process.cwd(), '_contents')

const getPageSlugs = (): string[] => fs.readdirSync(pageContentDirectory)

type Items = {
  [key: string]: string
}

export const getPageBySlug = (slug: string, fields: string[] = []): Items => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(pageContentDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    items[field] =
      field === 'slug'
        ? realSlug
        : field === 'content'
        ? (items[field] = content)
        : data[field]
        ? (items[field] = data[field])
        : undefined
  })

  return items
}

export const getAllPages = (fields: string[] = []): Items[] => {
  const slugs = getPageSlugs()
  const posts = slugs.map((slug): Items => getPageBySlug(slug, fields))
  // sort posts by date in descending order
  // .sort((post1, post2): -1 | 1 => (post1.date > post2.date ? -1 : 1))
  return posts
}
