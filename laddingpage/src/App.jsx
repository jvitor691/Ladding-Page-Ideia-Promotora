import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustbar from './components/Trustbar'
import Produtos from './components/Produtos'
import Diferencial from './components/Diferencial'
import Parceiros from './components/Parceiros'
import OndeEstamos from './components/OndeEstamos'
import Institucional from './components/Institucional'
import Cookie from './components/Cookie'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Trustbar />
        <Produtos />
        <Diferencial />
        <OndeEstamos />
        <Institucional />
        <Parceiros />
      </main>

      <Footer />
      <Cookie />
    </>
  )
}

export default App;
