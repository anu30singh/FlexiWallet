import { useState } from 'react'
import NavBar from './components/NavBar' 
import './index.css'
import LandingPage from './components/LandingPage'
import AboutUs from './components/AboutUs'

function App() {
  
  return (
    <>
    <NavBar />
    <LandingPage />
    <AboutUs />
    </>
  )
}

export default App
