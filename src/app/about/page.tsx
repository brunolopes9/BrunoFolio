'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I'm a Full Stack Developer with expertise in web, mobile, IoT, and blockchain solutions. 
          I have over two years of professional experience building modern applications across frontend and backend stacks.
          I stand out for my analytical thinking, discipline, fast learning, and focus on delivering quality solutions. 
          Fluent in English, Portuguese, Spanish, and French, I bring a high-performance attitude and an ambitious spirit oriented towards technical and personal excellence.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>Skills</motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript / HTML / CSS</li>
              <li>Tailwind CSS</li>
              <li>WordPress / Figma</li>
            </ul>
          </motion.div>
          
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend & IoT</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js / Express / C# / .NET</li>
              <li>SQL Server / PostgreSQL / MongoDB</li>
              <li>REST APIs / Webhooks / Microservices</li>
              <li>MQTT / BLE / Real-time systems</li>
            </ul>
          </motion.div>
          
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Other Tools & Technologies</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub / Azure DevOps</li>
              <li>Docker / CI/CD / Automated testing</li>
              <li>Python / Java / JavaScript</li>
              <li>Blockchain / Web3 / Smart Contracts</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>Experience</motion.h2>
        <motion.div className="max-w-3xl mx-auto space-y-8" variants={staggerContainer} initial="initial" animate="animate">

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">Devlop Supply Chain, Portugal • Jul 2025 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Designed and developed a blockchain platform for digitizing Bills of Lading (eBL) in transport industry</li>
              <li>Built .NET middleware to integrate TMS with blockchain, enabling tamper-proof eBL lifecycle</li>
              <li>Implemented smart contract layers, webhook event processing, and cross-system REST APIs</li>
              <li>Full-stack development with C#/.NET, React, Python APIs, SQL Server, Entity Framework Core</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Web & Mobile Developer (Freelance)</h3>
            <p className="text-primary mb-2">BestCall.pt, Portugal • Jan 2025 - Apr 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed fully responsive corporate website from Figma mockups</li>
              <li>Built custom WordPress theme with back-office for invoices, payments, knowledge base, and internal tools</li>
              <li>Handled infrastructure setup, database architecture, SEO, and performance optimization</li>
              <li>Stack: HTML, CSS, JavaScript, PHP, MongoDB, Node.js</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Full-Stack Developer (IoT & Web Systems)</h3>
            <p className="text-primary mb-2">HUF, Portugal • Jan 2024 - Jun 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed real-time worker productivity monitoring system for automotive production line</li>
              <li>Admin Panel (JavaScript, PHP, HTML/CSS), BLE Detection App, Real-time Control Panel (Node.js, Express, MQTT)</li>
              <li>Reduced downtime and improved workforce allocation</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer Intern</h3>
            <p className="text-primary mb-2">Softinsa, Portugal • Jun 2024 - Dec 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Full-stack development of internal CRM and HR platform for opportunities and job management</li>
              <li>Implemented multi-profile authentication (SSO + password login), dashboards, reporting, and notifications</li>
              <li>Stack: React, Node.js, PostgreSQL, HTML, CSS, JavaScript</li>
            </ul>
          </motion.div>

        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>Education</motion.h2>
        <motion.div className="max-w-3xl mx-auto" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Engineering</h3>
            <p className="text-primary mb-2">Escola Superior de Tecnologia e Gestão de Viseu • 2021 - 2024</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering, web, mobile, and real-time systems. Completed multiple projects demonstrating strong skills in analysis, problem-solving, and teamwork.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
