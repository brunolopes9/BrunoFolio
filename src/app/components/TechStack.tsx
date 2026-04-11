'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUpVariant } from '@/utils/animations'
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaWordpress,
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql,
  SiRedis, SiDotnet, SiExpress,
} from 'react-icons/si'

const technologies = [
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { icon: SiExpress, name: 'Express', color: '#ffffff' },
  { icon: SiDotnet, name: '.NET', color: '#512BD4' },
  { icon: FaPython, name: 'Python', color: '#3776AB' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiRedis, name: 'Redis', color: '#DC382D' },
  { icon: FaDocker, name: 'Docker', color: '#2496ED' },
  { icon: FaGitAlt, name: 'Git', color: '#F05032' },
  { icon: FaWordpress, name: 'WordPress', color: '#21759B' },
]

export default function TechStack() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Technologies I use daily to build reliable, scalable software
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow"
              variants={fadeInUpVariant}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <tech.icon
                className="h-8 w-8 md:h-10 md:w-10 text-gray-600 dark:text-gray-400 group-hover:text-[var(--icon-color)] transition-colors duration-300"
                style={{ '--icon-color': tech.color } as React.CSSProperties}
              />
              <span className="text-xs md:text-sm font-medium text-secondary group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
