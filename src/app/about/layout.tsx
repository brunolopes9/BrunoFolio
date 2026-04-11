import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Full Stack Developer with 2+ years of experience building modern web applications, APIs, blockchain platforms, and IoT systems.',
  openGraph: {
    title: 'About | Bruno Lopes',
    description: 'Full Stack Developer with expertise in React, Node.js, .NET, and Python.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
