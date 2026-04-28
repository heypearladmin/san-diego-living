import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogsDir = path.join(process.cwd(), 'src/content/blogs')

export type BlogPost = {
  slug: string
  title: string
  category: string
  image: string
  excerpt: string
  content: string
  date?: string
  readTime: string
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

function generateExcerpt(content: string, maxLength = 200): string {
  const firstParagraph = content.trim().split('\n\n')[0]
  const clean = firstParagraph.replace(/[#*`]/g, '').trim()
  return clean.length > maxLength ? clean.slice(0, maxLength).trimEnd() + '…' : clean
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogsDir)) return []

  return fs
    .readdirSync(blogsDir)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(blogsDir, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: (data.title as string) ?? '',
        category: (data.category as string) ?? '',
        image: (data.image as string) ?? '',
        excerpt: generateExcerpt(content),
        content,
        date: data.date as string | undefined,
        readTime: estimateReadTime(content),
      }
    })
    .sort((a, b) =>
      a.date && b.date ? (a.date < b.date ? 1 : -1) : 0
    )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: (data.title as string) ?? '',
    category: (data.category as string) ?? '',
    image: (data.image as string) ?? '',
    excerpt: generateExcerpt(content),
    content,
    date: data.date as string | undefined,
    readTime: estimateReadTime(content),
  }
}
