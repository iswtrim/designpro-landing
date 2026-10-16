import { motion } from 'framer-motion'

export default function SectionTitle({ label, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}
    >
      {label && (
        <span className="inline-block text-sm font-semibold text-gradient uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#5A5A72] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
