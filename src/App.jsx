import { ModalProvider } from './context/ModalContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Modal from './components/Modal'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <ModalProvider>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <Modal />
      <ScrollToTop />
    </ModalProvider>
  )
}
