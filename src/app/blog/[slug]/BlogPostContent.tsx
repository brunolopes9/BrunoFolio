'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaClock, FaTag, FaArrowLeft } from 'react-icons/fa'
import type { BlogPost } from '@/types'
import BlogCover from '@/app/components/BlogCover'

function renderMarkdown(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trimStart()
    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      )
    } else if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      )
    } else if (trimmed.startsWith('- **')) {
      const match = trimmed.match(/^- \*\*(.+?)\*\*(.*)$/)
      if (match) {
        elements.push(
          <li key={key++} className="flex items-start gap-2 text-secondary leading-relaxed ml-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
            <span><strong className="text-foreground">{match[1]}</strong>{match[2]}</span>
          </li>
        )
      }
    } else if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={key++} className="flex items-start gap-2 text-secondary leading-relaxed ml-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
          <span>{trimmed.slice(2)}</span>
        </li>
      )
    } else if (trimmed.length === 0) {
      elements.push(<div key={key++} className="h-2" />)
    } else {
      const formatted = trimmed
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">$1</code>')
      elements.push(
        <p
          key={key++}
          className="text-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      )
    }
  }

  return elements
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8"
          >
            <FaArrowLeft className="h-3 w-3" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-secondary mb-4">
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="flex items-center gap-1">
                <FaClock className="h-3 w-3" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <FaTag className="h-3 w-3" />
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-10">
            <BlogCover slug={post.slug} category={post.category} size="lg" />
          </div>

          <article className="prose-custom space-y-1">
            {renderMarkdown(post.content)}
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <FaArrowLeft className="h-3 w-3" />
              Back to All Articles
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
