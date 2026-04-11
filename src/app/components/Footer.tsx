import Link from 'next/link'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/brunolopes9', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/brunolopes9/', icon: FaLinkedin },
    { name: 'Email', href: 'mailto:bruno-lopes9@hotmail.com', icon: FaEnvelope },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-xl font-bold text-primary">
              BrunoFolio&trade;
            </Link>
            <p className="mt-3 text-sm text-secondary leading-relaxed max-w-xs">
              Building modern, scalable software solutions that solve real-world problems
              and drive business value.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4 mb-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-secondary">
              bruno-lopes9@hotmail.com
            </p>
            <p className="text-sm text-secondary">
              Viseu, Portugal
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary">
            &copy; {new Date().getFullYear()} Bruno Lopes. All rights reserved.
          </p>
          <p className="text-xs text-secondary">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
