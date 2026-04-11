import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional software engineering services including web development, API architecture, blockchain solutions, IoT systems, and technical consulting.',
  openGraph: {
    title: 'Services | Bruno Lopes',
    description: 'End-to-end software engineering services, from initial concept to production deployment.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
