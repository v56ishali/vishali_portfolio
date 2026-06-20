import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills'
import Internship from './Components/Internship/Internship'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ThreeBackground from './Components/ThreeBackground/ThreeBackground'

const App = () => {
  return (
    <>
      <Navbar />
      <ThreeBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Internship />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App