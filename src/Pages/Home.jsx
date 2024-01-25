import React from 'react'
import Hero from '../Components/Hero/Hero'
import './PagesCss/Home.css'

import About from '../Components/AboutSection/About'
import Roadmap from '../Components/Roadmap/Roadmap'
import Popular from '../Components/Popular/Popular'
import AllContent from '../Components/AllContent/AllContent'

const Home = () => {
  return (
    <div>
      <Hero />
      <AllContent />
      <Popular />
      <Roadmap />
      <About />

    </div>
  )
}

export default Home
