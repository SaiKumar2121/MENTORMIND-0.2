import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/nav2.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const [menu, setMenu] = useState('home')

  const backtohome = () => {
    navigate('/home')
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' onClick={backtohome} />
        <p>MentorMind</p>

      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu('home') }}><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>HOME</Link> {menu === 'home' ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu('Category') }}><Link to='/Category' style={{ textDecoration: 'none', color: 'white' }}>CATEGORY</Link> {menu === 'Category' ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu('membership') }}><Link to='/membership' style={{ textDecoration: 'none', color: 'white' }}>MemeberShip</Link> {menu === 'membership' ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu('FQA') }}><Link to='/FQA' style={{ textDecoration: 'none', color: 'white' }}>FAQ</Link> {menu === 'FQA' ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu('Blog') }}><Link to='/Blog' style={{ textDecoration: 'none', color: 'white' }}>BLOG</Link> {menu === 'Blog' ? <hr /> : <></>} </li>

      </ul>
      <div className='nav-login-btn'>
        <button>Login</button>

      </div>
    </div>
  )
}

export default Navbar
