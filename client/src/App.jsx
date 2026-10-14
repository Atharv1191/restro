import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/Dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
import Timing from './sections/Timing'
import TestimonialSection from './sections/TestimonialSection'
import Faq from './sections/Faq'
import Cta from './sections/Cta'
import Footer from './sections/Footer'
import LenisScroll from './components/LenisScroll'

const App = () => {
  return (
    <>
    <LenisScroll/>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Stats/>
    <Dishes/>
    <Features/>
    <BookingProcess/>
    <Timing/>
    <TestimonialSection/>
    <Faq/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default App