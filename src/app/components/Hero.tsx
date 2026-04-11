'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const roles = [
  'Full-Stack Developer',
  'Software Engineer',
  'Founder of LopesTech',
  'Backend Architect',
  'Problem Solver',
]

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1))
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime)
          return
        }
      } else {
        setText(currentWord.slice(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export default function Hero() {
  const typedText = useTypingEffect(roles)

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 dark:from-primary/10 dark:to-cyan-500/10" />
      <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            className="flex-1 text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Available for new projects
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                Bruno Lopes
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-secondary mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>{typedText}</span>
              <span className="animate-pulse text-primary">|</span>
            </motion.div>

            <motion.p
              className="text-secondary max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I build modern web applications, robust APIs, and scalable systems
              that solve real-world problems. From blockchain platforms to IoT monitoring,
              I turn complex requirements into clean, reliable software.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/projects"
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center shadow-lg shadow-primary/25"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="bg-gray-100 dark:bg-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-start items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/brunolopes9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/brunolopes9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:bruno-lopes9@hotmail.com"
                className="text-xl text-secondary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <span className="w-px h-5 bg-gray-300 dark:bg-gray-700" />
              <a
                href="https://drive.google.com/file/d/1yJ8Ya5yilbSRQMAQOLUOfvejHkfopsJa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-primary font-medium transition-colors"
              >
                CV (EN)
              </a>
              <a
                href="https://drive.google.com/file/d/1VSAYBIP7DNVaX1sED0-kFxJm0_H_oSUO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-primary font-medium transition-colors"
              >
                CV (PT)
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-full blur-2xl opacity-20 scale-110" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-white dark:ring-offset-gray-900">
                <Image
                  src="/bruno.png"
                  alt="Bruno Lopes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
