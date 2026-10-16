import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navLinks } from '../data/content'
import { useModal } from '../context/ModalContext'
import Button from './ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-[#E8EAF0]/60'
            : 'bg-transparent'
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <a
              href="#hero"
              className="text-xl font-bold tracking-tight text-[#1A1A2E]"
            >
              Design<span className="text-gradient">Pro</span>
            </a>

            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Основная навигация"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#5A5A72] hover:text-[#6C63FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button onClick={openModal} className="!rounded-lg">
                Записаться
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-[#1A1A2E] hover:bg-[#F8F9FC]"
              onClick={() => setMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <HiBars3 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-[#1A1A2E]/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[min(320px,85vw)] bg-white shadow-2xl lg:hidden"
              aria-label="Мобильное меню"
            >
              <div className="flex items-center justify-between p-5 border-b border-[#E8EAF0]">
                <span className="text-lg font-bold">
                  Design<span className="text-gradient">Pro</span>
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-[#F8F9FC]"
                  aria-label="Закрыть меню"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col p-5 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="px-4 py-3 rounded-lg text-base font-medium text-[#1A1A2E] hover:bg-[#F8F9FC] hover:text-[#6C63FF] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button onClick={() => { openModal(); setMenuOpen(false) }} className="mt-4 w-full">
                  Записаться
                </Button>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
