import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of full-stack projects including job portals, e-commerce platforms, blockchain middleware, IoT monitoring systems, and more.',
  openGraph: {
    title: 'Projects | Bruno Lopes',
    description: 'A collection of projects showcasing full-stack development expertise.',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
