import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`
        bg-white rounded-2xl shadow-card
        transition-shadow duration-300
        ${hover ? 'hover:shadow-card-hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}
