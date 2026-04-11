import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights and articles about software engineering, architecture patterns, and lessons from building real-world applications.',
  openGraph: {
    title: 'Blog | Bruno Lopes',
    description: 'Thoughts on software engineering, architecture, and lessons from building real products.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
