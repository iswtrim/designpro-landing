import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F9FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="О курсе"
              title="Системное обучение UI/UX с нуля до первого оффера"
              center={false}
            />
            <div className="space-y-4 text-[#5A5A72] leading-relaxed -mt-6">
              <p>
                DesignPro — это 12-недельная программа, построенная по методологии
                «обучение через практику». Вы освоите Figma, принципы UX-исследований,
                проектирование интерфейсов и работу с дизайн-системами.
              </p>
              <p>
                Каждую неделю — новый модуль и проект в портфолио: от wireframe до
                интерактивного прототипа. Менторы дают развёрнутую обратную связь
                в течение 24 часов.
              </p>
              <p>
                Поддержка не заканчивается с выпуском: карьерный центр помогает с
                резюме, кейс-стади и подготовкой к собеседованиям в партнёрских
                компаниях.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: '12', label: 'недель обучения' },
                { value: '48+', label: 'часов практики' },
                { value: '12', label: 'проектов' },
                { value: '24/7', label: 'чат поддержки' },
              ].map((stat) => (
                <li
                  key={stat.label}
                  className="p-4 rounded-2xl bg-white shadow-card"
                >
                  <span className="block text-2xl font-bold text-gradient">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[#5A5A72]">{stat.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-accent-gradient opacity-10 blur-2xl" />
            <img
              src="https://placehold.co/600x400/6C63FF/FFFFFF?text=DesignPro+Platform"
              alt="Скриншот платформы обучения DesignPro"
              className="relative w-full rounded-2xl shadow-card border border-white"
              width={600}
              height={400}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}