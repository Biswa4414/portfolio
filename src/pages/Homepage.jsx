import React from 'react'
import Navbar from '../Components/header/Navbar'
import LandingPage from '../Components/landingPage/LandingPage'
import Bio from '../Components/bio/Bio'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Bio/>
      <LandingPage/>
    </div>
  )
}

export default Homepage
