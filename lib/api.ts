import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = (): string[] => fs.readdirSync(postsDirectory)

type Items = {
  [key: string]: string
}

export const getPostBySlug = (slug: string, fields: string[] = []): Items => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    items[field] = field === 'slug'
      ? realSlug
      : field === 'content'
        ? items[field] = content
        : data[field]
          ? items[field] = data[field]
          : undefined
  })

  return items
}

export const getAllPosts = (fields: string[] = []): Items[] => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug): Items => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2): -1 | 1 => (post1.date > post2.date ? -1 : 1))
  return posts
}
