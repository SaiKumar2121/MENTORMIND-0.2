import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <a href='/#'>
          <i className='fa fa-facebook' />
        </a>
        <a href='/#'>
          <i className='fa fa-instagram' />
        </a>
        <a href='/#'>
          <i className='fa fa-youtube' />
        </a>
        <a href='/#'>
          <i className='fa fa-twitter' />
        </a>
      </div>

      <div className='row'>
        <ul>
          <li>
            Contact us
          </li>
          <li>
            About us
          </li>
          <li>
            Privacy Policy
          </li>
          <li>
            Terms & Conditions
          </li>
          <li>
            Career
          </li>
        </ul>
      </div>

      <div className='row'>
        Mentormind Copyright © 2023 Mentormind - All rights reserved || Designed By: Rishi
      </div>
    </div>
  )
}

export default Footer
