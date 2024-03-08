import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/hero/hero'
import Skills from './components/Navbar/Skills/Skills'
import Services from './components/Navbar/Services/Services'
import Portfolio from './components/Navbar/Portfolio/Portfolio'
import Number from './components/Navbar/Number/Number'
import Testimonials from './components/Navbar/Testimonials/Testimonials'
import Contact from './components/Navbar/Contact/Contact'
import Footer from './components/Footer/Footer'
import AnimatedCursor from 'react-animated-cursor'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 65, 125'
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={5}
        outerStyle={{
          border: "3px solid #fff",
        }}
        clickables={[
           "a",
           'input[type="text"]',
           'input[type="email"]',
           'input[type="number"]',
           'input[type="submit"]',
           'input[type="image"]',
           "label[for]",
           "select",
           "textarea",
           "button",
           ".link",
        ]}
        />  
      <Navbar />
      <Hero/>
      <Skills/>
      <Services />
      <Portfolio  />
      <Number  />
      <Testimonials />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
