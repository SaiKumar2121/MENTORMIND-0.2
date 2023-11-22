import React from 'react'
import './Roadmap.css'
import roadmap_img from '../Assets/roadmap.png'

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <div>
        
        <h2>Our Course Journey</h2>
      <p>
        Explore our comprehensive roadmap designed to guide you through each 
        stage of your learning journey. From beginner to expert, discover the 
        resources and support available at every step.
      </p>
      </div>  
      <img src={roadmap_img} alt="Roadmap to Completing Courses"/>

    </div>
  )
}

export default Roadmap