import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Poetry from './components/Poetry'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Mission />
        <Poetry />
        <Contact />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  )
}
