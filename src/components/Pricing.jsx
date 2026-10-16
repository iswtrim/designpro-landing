import { motion } from 'framer-motion'
import { HiCheck, HiXMark } from 'react-icons/hi2'
import { pricingPlans } from '../data/content'
import { useModal } from '../context/ModalContext'
import Card from './ui/Card'
import Button from './ui/Button'
import SectionTitle from './ui/SectionTitle'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Pricing() {
  const { openModal } = useModal()

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#F8F9FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Выберите тариф" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`w-full lg:flex-1 lg:max-w-sm ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              <Card
                hover
                className={`relative p-6 md:p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'ring-2 ring-[#6C63FF] shadow-card-hover lg:scale-[1.03]'
                    : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold text-white rounded-full bg-accent-gradient shadow-md">
                    Популярный
                  </span>
                )}

                <h3 className="text-xl font-bold text-[#1A1A2E]">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#1A1A2E]">
                    {plan.price}
                  </span>
                  <span className="text-[#5A5A72]">₽</span>
                </p>
                <p className="text-sm text-[#5A5A72] mt-1">за весь курс</p>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-start gap-3 text-sm ${
                        feature.included ? 'text-[#1A1A2E]' : 'text-[#9A9AB0]'
                      }`}
                    >
                      {feature.included ? (
                        <HiCheck className="w-5 h-5 text-[#6C63FF] shrink-0" aria-hidden="true" />
                      ) : (
                        <HiXMark className="w-5 h-5 text-[#C5C5D4] shrink-0" aria-hidden="true" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={openModal}
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full mt-8"
                >
                  Выбрать
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
