import React from 'react'
import './Navbar.css';
import logo from '../Assets/logos.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>MentorMind</p>
        

      </div>
      <ul className='nav-menu'>
        <li>HOME <hr /></li>
        
        <li>CATEGORIES</li>
        <li>ALL COURSES</li>
        <li>FAQ</li>
        <li>BLOG</li>

      </ul>
      <div className='nav-login-btn'>
        <button>Login</button>

      </div>
    </div>
  )
}

export default Navbar