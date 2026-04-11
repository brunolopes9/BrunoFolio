'use client'

import { useState } from 'react'
import { projects } from '@/contents/projects'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUpVariant } from '@/utils/animations'
import type { ProjectCategory } from '@/types'

const categories: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

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
            Portfolio
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, from production platforms to learning experiments
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
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-secondary hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          key={activeCategory}
        >
          {filtered.map((project) => (
            <motion.article
              key={project.slug}
              className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              variants={fadeInUpVariant}
              whileHover={{ y: -5 }}
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 bg-primary text-white text-xs font-medium rounded-full shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium capitalize">
                    {project.category}
                  </span>
                </div>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-secondary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-secondary text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
                    >
                      <FaGithub className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto text-sm text-primary font-medium hover:underline"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-secondary py-12">
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  )
}
