import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { testimonials } from '../data/content'
import Card from './ui/Card'
import SectionTitle from './ui/SectionTitle'

function Stars() {
  return (
    <span className="text-[#FFB800] text-sm tracking-wide" aria-label="5 из 5 звёзд">
      ★★★★★
    </span>
  )
}

function TestimonialCard({ item }) {
  return (
    <Card className="p-6 md:p-8 h-full flex flex-col">
      <Stars />
      <blockquote className="mt-4 flex-1 text-[#5A5A72] leading-relaxed text-sm md:text-base">
        «{item.text}»
      </blockquote>
      <footer className="mt-6 flex items-center gap-4 pt-6 border-t border-[#F0F1F5]">
        <img
          src={item.avatar}
          alt={`Фото ${item.name}`}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#6C63FF]/20"
          width={48}
          height={48}
        />
        <div>
          <cite className="not-italic font-semibold text-[#1A1A2E] text-sm">
            {item.name}
          </cite>
          <p className="text-xs text-[#5A5A72] mt-0.5">{item.role}</p>
        </div>
      </footer>
    </Card>
  )
}

function useSlidesPerView() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3)
      else if (window.innerWidth >= 768) setCount(2)
      else setCount(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

export default function Testimonials() {
  const slidesPerView = useSlidesPerView()
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, testimonials.length - slidesPerView)

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  const visibleItems = testimonials.slice(index, index + slidesPerView)
  const dotCount = maxIndex + 1

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Что говорят выпускники" />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${index}-${slidesPerView}`}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className={`grid gap-6 ${
                slidesPerView === 3
                  ? 'grid-cols-1 lg:grid-cols-3'
                  : slidesPerView === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1'
              }`}
            >
              {visibleItems.map((item) => (
                <TestimonialCard key={item.name} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            className="p-2.5 rounded-full border border-[#E8EAF0] text-[#1A1A2E] disabled:opacity-40 hover:bg-[#F8F9FC] transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-accent-gradient' : 'w-2 bg-[#E8EAF0] hover:bg-[#6C63FF]/30'
                }`}
                aria-label={`Перейти к отзыву ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            disabled={index >= maxIndex}
            className="p-2.5 rounded-full border border-[#E8EAF0] text-[#1A1A2E] disabled:opacity-40 hover:bg-[#F8F9FC] transition-colors"
            aria-label="Следующий отзыв"
          >
            <HiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
