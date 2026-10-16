import { FaTelegram, FaVk, FaYoutube } from 'react-icons/fa'
import { navLinks } from '../data/content'

const socials = [
  { icon: FaTelegram, label: 'Telegram', href: 'https://t.me' },
  { icon: FaVk, label: 'ВКонтакте', href: 'https://vk.com' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1A1A2E] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
          <div className="flex flex-col items-center">
            <a href="#hero" className="text-xl font-bold">
              Design<span className="text-[#48A9FE]">Pro</span>
            </a>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              Практический онлайн-курс по UI/UX дизайну. Стань востребованным
              специалистом за 12 недель с менторством и реальными проектами.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Быстрые ссылки
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#48A9FE] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:info@designpro-course.ru"
                  className="hover:text-[#48A9FE] transition-colors break-all"
                >
                  info@designpro-course.ru
                </a>
              </li>
              <li>
                <a
                  href="tel:+7 (999) 123-45-67"
                  className="hover:text-[#48A9FE] transition-colors whitespace-nowrap"
                >
                  +7 (999) 123-45-67
                </a>
              </li>
            </ul>
            <div className="flex justify-center gap-3 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-accent-gradient transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © 2026 DesignPro. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
