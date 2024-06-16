import { useState } from 'react'
import NavBar from './components/NavBar' 
import './index.css'
import LandingPage from './components/LandingPage'
import AboutUs from './components/AboutUs'
import FAQ from './components/FAQ'

function App() {
  
  return (
    <>
    <NavBar />
    <LandingPage />
    <AboutUs />
    <FAQ />
    </>
  )
}

export default App
