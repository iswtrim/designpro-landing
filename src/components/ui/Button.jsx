import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent-gradient text-white shadow-md shadow-[#6C63FF]/25 hover:shadow-lg hover:shadow-[#6C63FF]/35',
  secondary:
    'bg-white text-[#1A1A2E] border border-[#E8EAF0] shadow-card hover:shadow-card-hover hover:border-[#6C63FF]/30',
  ghost: 'bg-transparent text-[#1A1A2E] hover:bg-[#F8F9FC]',
  outline:
    'bg-transparent text-[#6C63FF] border-2 border-[#6C63FF] hover:bg-[#6C63FF]/5',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 text-sm font-semibold rounded-lg
        transition-shadow duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-2
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  )
}
