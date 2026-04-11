import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Bruno Lopes for software development projects, consulting, or collaboration opportunities.',
  openGraph: {
    title: 'Contact | Bruno Lopes',
    description: 'Reach out for software development projects and consulting.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
