'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/contents/services'
import { staggerContainer, fadeInUpVariant } from '@/utils/animations'
import {
  FaGlobe, FaMobileAlt, FaServer, FaCubes, FaChartLine, FaRocket, FaCheck,
} from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: FaGlobe,
  mobile: FaMobileAlt,
  server: FaServer,
  blocks: FaCubes,
  chart: FaChartLine,
  rocket: FaRocket,
}

export default function Services() {
  return (
    <div className="py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
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
            Services
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How I Can Help Your Business
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            End-to-end software engineering services, from initial concept to production deployment
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FaGlobe
            return (
              <motion.div
                key={service.title}
                className="group bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                variants={fadeInUpVariant}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-secondary"
                    >
                      <FaCheck className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              My Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your business goals, requirements, and constraints through in-depth discussion' },
                { step: '02', title: 'Architecture', desc: 'Designing the technical solution, selecting the right stack, and planning the development roadmap' },
                { step: '03', title: 'Development', desc: 'Building the solution with clean code, regular updates, and iterative feedback loops' },
                { step: '04', title: 'Delivery', desc: 'Deploying to production, performance optimization, documentation, and ongoing support' },
              ].map((item) => (
                <div key={item.step} className="text-center md:text-left">
                  <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-primary via-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
