import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p> {props.name} </p>
      
        <div className='free-paid'>
          <div className='free'>
            {props.free}

          </div>
          <div className='paid'>
          ₹{props.price}

          </div>
            


        </div>
           

    </div>
  )
}

export default Items