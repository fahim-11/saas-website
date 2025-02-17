import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Steps from './Components/Steps/Step'
import Services from './Components/Services/Services'
import Pricing from './Components/Pricing/Pricing'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps/>
      <Services />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App