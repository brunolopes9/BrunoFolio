'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUpVariant } from '@/utils/animations'
import {
  FaCode, FaLaptopCode, FaGraduationCap, FaBriefcase,
} from 'react-icons/fa'

const skills = [
  {
    icon: FaCode,
    title: 'Languages & Frontend',
    items: [
      'JavaScript / TypeScript / HTML5 / CSS3 / SASS',
      'React / Next.js / Tailwind CSS',
      'WordPress / Figma / Responsive Design',
    ],
  },
  {
    icon: FaLaptopCode,
    title: 'Backend & Data',
    items: [
      'Node.js / Express / C# / .NET / Python',
      'SQL Server / PostgreSQL / MongoDB / MySQL',
      'REST APIs / Webhooks / Microservices',
      'Authentication / Multi-profile access / SSO',
    ],
  },
  {
    icon: FaGraduationCap,
    title: 'Tools & Specialties',
    items: [
      'Git / GitHub / Azure DevOps / CI/CD / Docker',
      'Blockchain / Web3 / Smart Contracts',
      'MQTT / BLE / Real-time Systems / IoT',
      'Testing / Debugging / Performance / SEO',
    ],
  },
]

const experience = [
  {
    role: 'Founder & Software Engineer',
    company: 'LopesTech',
    location: 'Viseu, Portugal',
    period: '2025 – Present',
    points: [
      'Founded LopesTech, a Viseu-based business combining mobile device repair and custom software development',
      'Built and launched the company website (lopestech.pt) showcasing the repair portfolio and custom software services',
      'Delivering custom web platforms and full-stack applications to local clients across Portugal',
      'Manage end-to-end client relationships — from requirements gathering to deployment and support',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Devlop Supply Chain',
    location: 'Portugal',
    period: 'Jul 2025 – Present',
    points: [
      'Designed and developed a blockchain platform for digitizing Bills of Lading (eBL) in the transport industry',
      'Built .NET middleware to integrate TMS with blockchain, enabling tamper-proof eBL lifecycle management',
      'Implemented smart contract layers, webhook event processing, and cross-system REST APIs',
      'Full-stack development with C#/.NET, React, Python APIs, SQL Server, Entity Framework Core',
    ],
  },
  {
    role: 'Web & Mobile Developer (Freelance)',
    company: 'BestCall.pt',
    location: 'Portugal',
    period: 'Jan 2025 – Apr 2025',
    points: [
      'Developed fully responsive corporate website from Figma mockups',
      'Built custom WordPress theme with back-office for invoices, payments, knowledge base, and internal tools',
      'Handled infrastructure setup, database architecture, SEO, and performance optimization',
      'Stack: HTML, CSS, JavaScript, PHP, MongoDB, Node.js',
    ],
  },
  {
    role: 'Full-Stack Developer (IoT & Web Systems)',
    company: 'HUF',
    location: 'Portugal',
    period: 'Jan 2024 – Jun 2024',
    points: [
      'Developed real-time worker productivity monitoring system for automotive production line',
      'Built Admin Panel (JavaScript, PHP, HTML/CSS), BLE Detection App, Real-time Control Panel (Node.js, Express, MQTT)',
      'Reduced downtime and improved workforce allocation through live monitoring dashboards',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Softinsa',
    location: 'Portugal',
    period: 'Jun 2024 – Dec 2024',
    points: [
      'Full-stack development of internal CRM and HR platform for opportunities and job management',
      'Implemented multi-profile authentication (SSO + password), dashboards, reporting, and notifications',
      'Stack: React, Node.js, PostgreSQL, HTML, CSS, JavaScript',
    ],
  },
]

export default function About() {
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
            About
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            I&apos;m a Full Stack Developer and the founder of <span className="text-primary font-semibold">LopesTech</span>,
            a Viseu-based business that combines mobile device repair with custom software development. With 2+ years
            of professional experience building modern applications across frontend and backend stacks, I stand out for
            my analytical thinking, discipline, fast learning, and focus on delivering quality solutions. Fluent in
            English, Portuguese, Spanish, and French, I bring a high-performance attitude and an ambitious spirit
            oriented towards technical and personal excellence.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills &amp; Technologies</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="group bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                variants={fadeInUpVariant}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2.5">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>

          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative pl-8 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {index < experience.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
                )}
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaBriefcase className="h-3 w-3 text-primary" />
                </div>

                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-sm text-secondary">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">
                    {exp.company}, {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <FaGraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">
                    Escola Superior de Tecnologia e Gestão de Viseu
                  </p>
                  <p className="text-secondary text-sm mb-3">2021 – 2024</p>
                  <p className="text-secondary text-sm leading-relaxed">
                    Graduated with honors. Focused on software engineering, web, mobile, and real-time systems.
                    Completed multiple projects demonstrating strong skills in analysis, problem-solving, and teamwork.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Languages */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { lang: 'Portuguese', level: 'Native' },
              { lang: 'English', level: 'Fluent' },
              { lang: 'Spanish', level: 'Fluent' },
              { lang: 'French', level: 'Fluent' },
            ].map((item) => (
              <motion.div
                key={item.lang}
                className="text-center bg-white dark:bg-gray-800/50 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
                whileHover={{ y: -3 }}
              >
                <p className="font-semibold">{item.lang}</p>
                <p className="text-sm text-primary">{item.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
