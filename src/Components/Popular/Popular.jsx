import React from 'react'
import './Popular.css'
import popular_details from '../Assets/popular'
import Items from '../Items/Items'

const Popular = () => {
  return (
    <div className='popular-container'>
      <h1>Top-Rated Courses this Year</h1>
      <hr />
      <p>Unlock Opportunities with Popular Courses Across AI, IT, Mearketing, and Diverse Domains.</p>
      <div className='cards'>

        {popular_details.map((item, i) => {
          return <Items key={i} id={item.id} name={item.name} image={item.image} free={item.free} price={item.price} />
        })}

      </div>

    </div>

  )
}

export default Popular
