import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Extra from './components/extra'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import WhyChooseUs from './components/WhyChooseUs'
import FloatingWhatsApp from './FloatingWhatsApp'
import Equipment from './Equipment'
import Footer from './Footer'



function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Equipment/>
      <Gallery/>
      <WhyChooseUs/>
      <Extra/>
      <Pricing/>
      <Contact/>
      <FloatingWhatsApp />
      <Footer/>

    </div>
  )
}

export default App
