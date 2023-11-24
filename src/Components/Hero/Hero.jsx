import React from 'react'
import './Hero.css'
import banner_image from '../Assets/1.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left-container'>
          <div className='title'>
          Build and Create Dreams
          </div>
          <div className='para'>
          Together with Innovate Learn Nexus
          </div>
          <div className='description'>
          Innovate Learn Nexus captures the essence of innovation in education and technology
          while emphasizing the transformative nature of your resources. It also highlights the 
          concepts of access, navigation, and the convergence of learning and innovation.
          </div>
          <button className='button-class'>
          View Categories
          </button>
        </div>
        <div className='hero-right-container'>
          <img src={banner_image} alt=''/>
        </div>

    </div>
  )
}

export default Hero