import React from 'react';
import './About.css'
import about_img from '../Assets/kindpng_41492.png';
const About = () => {
  return (
    <div className="about-container">
    <div className="text-container">
      <h2 className="heading-about">About Us</h2> 
      <div className='sub-container'> 
      <h1 className="title"><span className='span-class'>Innovate Learn Nexus</span> is a Free E-Resource Provider To Help You Grow</h1>
      </div>
      <p className="subtitle">It is hoped that Innovate Learn Nexus can become a useful service in the future in the field of education</p>
    </div>
    <div className="right-container">
      <img src={about_img} alt="" />
    </div>
  </div>
  )
}

export default About