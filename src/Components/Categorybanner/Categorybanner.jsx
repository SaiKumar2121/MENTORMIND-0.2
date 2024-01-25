import React from 'react'
import './Categorybanner.css'
import banner_category from '../Assets/—Pngtree—online network online education class_6184729.png'

const Categorybanner = () => {
  return (
    <div className='hero-con'>
      <div className='hero-left-container-banner'>
        <div className='title-class'>
          Start your favourite course

        </div>
        <div className='para'>
          Now learning from anywhere, and build your bright career.
        </div>
        <div className='description'>
          Explore endless learning opportunities with 'Start Your Favorite Course.' Dive into top courses from across the internet, hassle-free. Build your bright career effortlessly!

        </div>

      </div>
      <div className='hero-right-container'>
        <img src={banner_category} alt='' />
      </div>

    </div>
  )
}

export default Categorybanner
