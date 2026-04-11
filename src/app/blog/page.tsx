'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { blogPosts } from '@/contents/blog'
import { staggerContainer, fadeInUpVariant } from '@/utils/animations'
import { FaClock, FaTag } from 'react-icons/fa'
import BlogCover from '@/app/components/BlogCover'

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export default function Blog() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === active)

  return (
    <div className="py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Blog
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights &amp; Articles
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Lessons from building real-world software, architecture decisions, and career reflections
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-secondary hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          key={active}
        >
          {filtered.map((post) => (
            <motion.article
              key={post.slug}
              className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              variants={fadeInUpVariant}
              whileHover={{ y: -5 }}
            >
              <BlogCover slug={post.slug} category={post.category} size="md" />
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-secondary mb-4">
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
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-secondary rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Read Article <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
