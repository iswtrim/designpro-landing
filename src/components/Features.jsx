import { motion } from 'framer-motion'
import {
  HiVideoCamera,
  HiBriefcase,
  HiUserGroup,
  HiRocketLaunch,
} from 'react-icons/hi2'
import { features } from '../data/content'
import Card from './ui/Card'
import SectionTitle from './ui/SectionTitle'

const iconMap = {
  video: HiVideoCamera,
  portfolio: HiBriefcase,
  mentor: HiUserGroup,
  career: HiRocketLaunch,
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Почему выбирают DesignPro" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div key={feature.title} variants={item}>
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-5 shadow-md shadow-[#6C63FF]/20">
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5A5A72] leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
