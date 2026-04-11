'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { Project } from '@/types'

export default function ProjectDetailContent({ project }: { project: Project }) {
  const gallery = project.images && project.images.length > 0 ? project.images : [project.image]
  const [activeImage, setActiveImage] = useState(0)
  const safeIndex = activeImage % gallery.length
  const goNext = () => setActiveImage((i) => (i + 1) % gallery.length)
  const goPrev = () => setActiveImage((i) => (i - 1 + gallery.length) % gallery.length)

  return (
    <div className="py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8"
          >
            <FaArrowLeft className="h-3 w-3" />
            Back to Projects
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-secondary mb-8 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <FaGithub className="h-4 w-4" />
                View Source Code
              </a>
            )}
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" />
              Live Demo
            </a>
          </div>

          <div className="mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900">
              <Image
                key={gallery[safeIndex]}
                src={gallery[safeIndex]}
                alt={`${project.title} — screenshot ${safeIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 text-gray-800 dark:text-gray-100 flex items-center justify-center shadow-lg transition-colors"
                  >
                    <FaChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 text-gray-800 dark:text-gray-100 flex items-center justify-center shadow-lg transition-colors"
                  >
                    <FaChevronRight className="h-3.5 w-3.5" />
                  </button>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                    {safeIndex + 1} / {gallery.length}
                  </div>
                </>
              )}
            </div>
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 gap-3">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      i === safeIndex
                        ? 'border-primary scale-105'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-secondary"
                    >
                      <FaCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <FaArrowLeft className="h-3 w-3" />
              Back to All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
