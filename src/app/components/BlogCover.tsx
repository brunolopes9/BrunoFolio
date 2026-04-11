'use client'

import {
  FaServer, FaDatabase, FaShieldAlt, FaLayerGroup,
  FaRoute, FaGraduationCap, FaBriefcase, FaRocket, FaGlobe,
  FaReact, FaCode, FaMobileAlt, FaBolt,
  FaBroadcastTower, FaMicrochip, FaChartBar, FaWifi,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb,
} from 'react-icons/si'

interface BlogCoverProps {
  slug: string
  category: string
  size?: 'sm' | 'md' | 'lg'
}

const coverConfigs: Record<string, {
  gradient: string
  mainIcon: React.ComponentType<{ className?: string }>
  floatingIcons: React.ComponentType<{ className?: string }>[]
  accentColor: string
}> = {
  'building-scalable-apis-nodejs': {
    gradient: 'from-emerald-500/90 via-teal-600/80 to-cyan-700/90',
    mainIcon: FaServer,
    floatingIcons: [FaDatabase, FaShieldAlt, FaLayerGroup, FaRoute, SiNodedotjs],
    accentColor: 'text-emerald-200',
  },
  'from-junior-to-fullstack-my-journey': {
    gradient: 'from-violet-500/90 via-purple-600/80 to-indigo-700/90',
    mainIcon: FaRocket,
    floatingIcons: [FaGraduationCap, FaBriefcase, FaCode, FaGlobe],
    accentColor: 'text-violet-200',
  },
  'why-nextjs-for-modern-web-apps': {
    gradient: 'from-blue-500/90 via-indigo-600/80 to-sky-700/90',
    mainIcon: SiNextdotjs,
    floatingIcons: [FaReact, SiTypescript, FaMobileAlt, FaBolt],
    accentColor: 'text-blue-200',
  },
  'real-time-iot-monitoring-with-mqtt': {
    gradient: 'from-orange-500/90 via-amber-600/80 to-red-600/90',
    mainIcon: FaBroadcastTower,
    floatingIcons: [FaMicrochip, FaChartBar, FaWifi, SiMongodb],
    accentColor: 'text-orange-200',
  },
}

const defaultConfig = {
  gradient: 'from-gray-500/90 via-gray-600/80 to-gray-700/90',
  mainIcon: FaCode,
  floatingIcons: [FaServer, FaDatabase, FaReact, FaGlobe],
  accentColor: 'text-gray-200',
}

const floatingPositions = [
  { top: '12%', left: '8%', size: 'h-5 w-5', opacity: 'opacity-30', delay: '0s' },
  { top: '18%', right: '12%', size: 'h-4 w-4', opacity: 'opacity-20', delay: '1s' },
  { bottom: '20%', left: '15%', size: 'h-4 w-4', opacity: 'opacity-25', delay: '0.5s' },
  { bottom: '15%', right: '10%', size: 'h-5 w-5', opacity: 'opacity-20', delay: '1.5s' },
]

const sizeClasses = {
  sm: { container: 'h-48', icon: 'h-14 w-14', ring: 'w-24 h-24' },
  md: { container: 'h-52', icon: 'h-16 w-16', ring: 'w-28 h-28' },
  lg: { container: 'h-56', icon: 'h-20 w-20', ring: 'w-32 h-32' },
}

export default function BlogCover({ slug, size = 'md' }: BlogCoverProps) {
  const config = coverConfigs[slug] || defaultConfig
  const s = sizeClasses[size]
  const MainIcon = config.mainIcon

  return (
    <div className={`${s.container} relative overflow-hidden bg-gradient-to-br ${config.gradient}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {config.floatingIcons.map((Icon, idx) => {
        const pos = floatingPositions[idx % floatingPositions.length]
        return (
          <div
            key={idx}
            className={`absolute ${pos.opacity} ${config.accentColor}`}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: pos.bottom,
              animation: `float ${3 + idx * 0.5}s ease-in-out infinite`,
              animationDelay: pos.delay,
            }}
          >
            <Icon className={pos.size} />
          </div>
        )
      })}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`${s.ring} rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/20`}>
          <MainIcon className={`${s.icon} text-white drop-shadow-lg`} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
      `}</style>
    </div>
  )
}
