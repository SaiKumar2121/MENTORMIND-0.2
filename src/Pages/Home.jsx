import React from 'react'
import Hero from '../Components/Hero/Hero'
import './PagesCss/Home.css'
import { Benfits } from '../Components/Benfits/Benfits'
import AllContent from '../Components/AllContent/AllContent'
import About from '../Components/AboutSection/About'
import Roadmap from '../Components/Roadmap/Roadmap'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Benfits/>
        <AllContent/>
        <About/>
        <Roadmap/>

    </div>
  )
}

export default Home