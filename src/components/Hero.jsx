import { motion } from 'framer-motion'
import { useModal } from '../context/ModalContext'
import Button from './ui/Button'
import HeroIllustration from './HeroIllustration'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { openModal } = useModal()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#6C63FF]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#48A9FE]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-[#6C63FF]/10 text-[#6C63FF]"
            >
              Набор открыт · Старт в июне
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold leading-[1.15] tracking-tight text-[#1A1A2E]"
            >
              Стань UI/UX дизайнером{' '}
              <span className="text-gradient">за 12 недель</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-base sm:text-lg text-[#5A5A72] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Практический онлайн-курс с менторством и реальными проектами в
              портфолио
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button onClick={openModal} className="!px-8 !py-3.5 text-base">
                Начать обучение
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Узнать больше
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-[#5A5A72]"
            >
              <span>
                <strong className="text-[#1A1A2E] font-semibold">2 400+</strong> выпускников
              </span>
              <span className="hidden sm:inline text-[#E8EAF0]">|</span>
              <span>
                <strong className="text-[#1A1A2E] font-semibold">4.9</strong> средняя оценка
              </span>
              <span className="hidden sm:inline text-[#E8EAF0]">|</span>
              <span>
                <strong className="text-[#1A1A2E] font-semibold">87%</strong> трудоустройство
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-first lg:order-last"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
