import React from 'react'
import Hero from '../Components/Hero/Hero'
import './PagesCss/Home.css'
import { Benfits } from '../Components/Benfits/Benfits'
import AllContent from '../Components/AllContent/AllContent'
import About from '../Components/AboutSection/About'

const Home = () => {
  return (
    <div className='bg-color'>
        <Hero/>
        <Benfits/>
        <AllContent/>
        <About/>
    </div>
  )
}

export default Home