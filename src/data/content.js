export const navLinks = [
  { label: 'Курс', href: '#about' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#footer' },
]

export const features = [
  {
    icon: 'video',
    title: 'Живые вебинары',
    description:
      'Еженедельные сессии с практикующими дизайнерами из ведущих IT-компаний. Задавайте вопросы в реальном времени.',
  },
  {
    icon: 'portfolio',
    title: '12 реальных проектов',
    description:
      'Соберите сильное портфолио: от лендингов до мобильных приложений. Каждый проект — с обратной связью ментора.',
  },
  {
    icon: 'mentor',
    title: 'Персональное менторство',
    description:
      'Индивидуальные созвоны, разбор работ и персональный план развития на весь период обучения.',
  },
  {
    icon: 'career',
    title: 'Трудоустройство',
    description:
      'Помогаем с резюме, подготовкой к собеседованиям и рекомендациями в партнёрские компании.',
  },
]

export const testimonials = [
  {
    name: 'Анна Соколова',
    role: 'UI/UX Designer в Альфа-Банк',
    text: 'За 12 недель я полностью сменила профессию. Менторы помогли собрать портфолио, через месяц после выпуска получила оффер.',
    avatar: 'https://placehold.co/80x80/6C63FF/FFFFFF?text=АС',
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Product Designer в Яндекс',
    text: 'Структурированная программа и живые вебинары — именно то, чего не хватало при самостоятельном обучении. Рекомендую!',
    avatar: 'https://placehold.co/80x80/48A9FE/FFFFFF?text=ДК',
  },
  {
    name: 'Мария Петрова',
    role: 'UX Researcher в Тинькофф',
    text: 'Особенно ценю обратную связь по каждому проекту. Чувствуешь, что тебя ведут к реальному уровню middle-дизайнера.',
    avatar: 'https://placehold.co/80x80/8B83FF/FFFFFF?text=МП',
  },
  {
    name: 'Игорь Волков',
    role: 'UI Designer во ВКонтакте',
    text: 'Курс дал системное понимание UX-процесса. Теперь уверенно веду проекты от research до финального UI-kit.',
    avatar: 'https://placehold.co/80x80/6C63FF/FFFFFF?text=ИВ',
  },
]

export const pricingPlans = [
  {
    name: 'Базовый',
    price: '29 900',
    popular: false,
    features: [
      { text: 'Доступ к видеолекциям', included: true },
      { text: '4 проекта в портфолио', included: true },
      { text: 'Чат с кураторами', included: true },
      { text: 'Живые вебинары', included: false },
      { text: 'Персональный ментор', included: false },
    ],
  },
  {
    name: 'Стандарт',
    price: '49 900',
    popular: true,
    features: [
      { text: 'Все видеолекции и вебинары', included: true },
      { text: '12 проектов в портфолио', included: true },
      { text: 'Групповые разборы работ', included: true },
      { text: '2 созвона с ментором', included: true },
      { text: 'Помощь с трудоустройством', included: false },
    ],
  },
  {
    name: 'VIP',
    price: '79 900',
    popular: false,
    features: [
      { text: 'Полный доступ ко всем материалам', included: true },
      { text: '12 проектов + бонусный кейс', included: true },
      { text: 'Безлимитные созвоны с ментором', included: true },
      { text: 'Приоритетная обратная связь', included: true },
      { text: 'Гарантированная стажировка', included: true },
    ],
  },
]
