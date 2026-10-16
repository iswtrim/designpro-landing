import { motion } from 'framer-motion'
import {
  HiCursorArrowRays,
  HiSquares2X2,
  HiPaintBrush,
  HiDevicePhoneMobile,
} from 'react-icons/hi2'

const float = (delay) => ({
  y: [0, -12, 0],
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
})

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square" aria-hidden="true">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6C63FF]/10 via-[#48A9FE]/10 to-transparent" />

      <motion.div
        animate={float(0)}
        className="absolute top-[8%] left-[5%] w-[55%] h-[42%] rounded-2xl bg-white shadow-card border border-[#E8EAF0]/80 p-4"
      >
        <div className="flex gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD93D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#6BCB77]" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-3/4 rounded-full bg-[#F0F1F5]" />
          <div className="h-3 w-1/2 rounded-full bg-accent-gradient opacity-60" />
          <div className="h-16 w-full rounded-xl bg-gradient-to-r from-[#6C63FF]/20 to-[#48A9FE]/20 mt-3" />
        </div>
      </motion.div>

      <motion.div
        animate={float(0.5)}
        className="absolute top-[35%] right-[0%] w-[48%] h-[38%] rounded-2xl bg-accent-gradient shadow-lg shadow-[#6C63FF]/25 p-4 flex flex-col justify-between"
      >
        <HiSquares2X2 className="w-8 h-8 text-white/90" />
        <div>
          <p className="text-white font-semibold text-sm">UI Kit</p>
          <p className="text-white/70 text-xs">Design System</p>
        </div>
      </motion.div>

      <motion.div
        animate={float(1)}
        className="absolute bottom-[12%] left-[12%] w-[40%] h-[32%] rounded-2xl bg-white shadow-card border border-[#E8EAF0] p-3 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-[#F8F9FC] flex items-center justify-center">
          <HiPaintBrush className="w-5 h-5 text-[#6C63FF]" />
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="h-2 w-full rounded bg-[#F0F1F5]" />
          <div className="h-2 w-2/3 rounded bg-[#F0F1F5]" />
        </div>
      </motion.div>

      <motion.div
        animate={float(1.5)}
        className="absolute bottom-[28%] right-[18%] w-14 h-14 rounded-2xl bg-white shadow-card flex items-center justify-center border border-[#E8EAF0]"
      >
        <HiDevicePhoneMobile className="w-7 h-7 text-[#48A9FE]" />
      </motion.div>

      <motion.div
        animate={float(0.8)}
        className="absolute top-[22%] right-[28%] w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center shadow-lg"
      >
        <HiCursorArrowRays className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-full bg-[#6C63FF]/10 blur-xl"
        animate={{ scaleX: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  )
}
