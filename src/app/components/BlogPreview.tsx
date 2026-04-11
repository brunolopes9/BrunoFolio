'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { blogPosts } from '@/contents/blog'
import { staggerContainer, fadeInUpVariant } from '@/utils/animations'
import { FaClock, FaTag } from 'react-icons/fa'
import BlogCover from '@/app/components/BlogCover'

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3)

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Thoughts on software engineering, architecture, and lessons from building real products
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featured.map((post) => (
            <motion.article
              key={post.slug}
              className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              variants={fadeInUpVariant}
              whileHover={{ y: -5 }}
            >
              <BlogCover slug={post.slug} category={post.category} size="sm" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <FaClock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaTag className="h-3 w-3" />
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-secondary text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Read More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Posts
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
