'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/contents/services'
import { staggerContainer, fadeInUpVariant } from '@/utils/animations'
import {
  FaGlobe, FaMobileAlt, FaServer, FaCubes, FaChartLine, FaRocket,
} from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: FaGlobe,
  mobile: FaMobileAlt,
  server: FaServer,
  blocks: FaCubes,
  chart: FaChartLine,
  rocket: FaRocket,
}

export default function ServicesPreview() {
  const featured = services.slice(0, 3)

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            End-to-end software solutions that solve real problems and drive business value
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featured.map((service) => {
            const Icon = iconMap[service.icon] || FaGlobe
            return (
              <motion.div
                key={service.title}
                className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                variants={fadeInUpVariant}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-secondary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
