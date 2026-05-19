'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-cyan-500 p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Got a Website or App Project in Mind?
            </motion.h2>
            <motion.p
              className="text-lg text-white/90 max-w-2xl mx-auto mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Send me a short description and I&apos;ll reply with concrete ideas, a timeline,
              and an honest estimate — no commitment, no boilerplate.
            </motion.p>
            <motion.p
              className="text-sm text-white/70 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              Free 20-minute consultation · Reply within 24h · EU timezone
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/351933938716?text=Hi%20Bruno%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
