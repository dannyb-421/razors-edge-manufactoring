import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
