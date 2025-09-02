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
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a junior Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
I stand out for my
fast learning, analytical thinking, discipline and focus on results. I am highly adaptable and motivated by
challenges, with a strong growth mindset and a commitment to delivering value with quality. Fluent in four
languages, I bring a high-performance attitude and an ambitious spirit oriented towards technical and
personal excellence.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript / Javascript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer / Intern </h3>
            <p className="text-primary mb-2">Softinsa, Viseu • 2023</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed a Opportunity and Offer Management System:
</li>
              <li>Developed a full‑stack Web (React, Node.js, Sequelize/MySQL)</li>
              <li>. Implemented multi‑profile authentication (SSO
and password login), dashboards, reporting, notifications, and meeting
scheduling</li>
<li> Managed user permissions and multi‑profile roles</li>
<li> Optimized workflows and centralizing
opportunities and job openings for improved collaboration.
</li>
            </ul>
          </motion.div>

                    <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full-Stack Trainee (IoT and Web Systems)</h3>
            <p className="text-primary mb-2">HUF, Tondela
 • 2024</p>

            <ul className="text-secondary list-disc list-inside space-y-2">
              <li> Developed a real‑time worker and productivity monitoring system for a car
factory.
Built three main applications:</li>
              <li>Admin Panel: Management of workers, machines, and beacons
(JavaScript, PHP, HTML/CSS)
</li>
              <li>BLE Detection App: BLE‑based application to detect device scanning on
machines
</li>
              <li>Real‑time Control Panel: Real‑time dashboard with historical analysis
(Node.js, Express, MQTT)
</li>
<li> Reduced downtime caused by worker absence, enabling faster
training and better workforce allocation</li>
            </ul>
          </motion.div>



        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary mb-2">Escola Superior de Tecnologia e Gestão de Viseu • 2021 - 2024</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web development.  I always proved to be one of the best
students in the class, doing everything with excellence.

            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 