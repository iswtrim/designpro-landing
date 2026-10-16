import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'
import { useModal } from '../context/ModalContext'
import Button from './ui/Button'

export default function Modal() {
  const { isOpen, closeModal } = useModal()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    closeModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-[#1A1A2E]/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            key="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-[1] w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3
                    id="modal-title"
                    className="text-xl font-bold text-[#1A1A2E]"
                  >
                    Записаться на курс
                  </h3>
                  <p className="mt-1 text-sm text-[#5A5A72]">
                    Оставьте контакты — мы свяжемся в течение дня
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 rounded-lg text-[#5A5A72] hover:bg-[#F8F9FC] transition-colors shrink-0"
                  aria-label="Закрыть"
                >
                  <HiXMark className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1A1A2E] mb-1.5"
                  >
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Как к вам обращаться"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8EAF0] text-[#1A1A2E] placeholder:text-[#9A9AB0] focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/40 focus:border-[#6C63FF] transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1A1A2E] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8EAF0] text-[#1A1A2E] placeholder:text-[#9A9AB0] focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/40 focus:border-[#6C63FF] transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#1A1A2E] mb-1.5"
                  >
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8EAF0] text-[#1A1A2E] placeholder:text-[#9A9AB0] focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/40 focus:border-[#6C63FF] transition-shadow"
                  />
                </div>
                <Button type="submit" className="w-full mt-2">
                  Отправить
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
