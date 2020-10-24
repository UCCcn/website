import Author from './author'

type PageType = {
  slug: string
  title: string
  date?: string
  coverImage?: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PageType
