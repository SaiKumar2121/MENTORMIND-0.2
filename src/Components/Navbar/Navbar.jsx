import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logos.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menu,setMenu] = useState('home');
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>MentorMind</p>
        

      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu('home')}}><Link to='/' style={{textDecoration:'none', color: 'white' }}>HOME</Link> {menu==='home'? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu('Category')}}><Link to='/Category' style={{textDecoration:'none', color: 'white'}}>CATEGORY</Link> {menu==='Category'? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu('Allcourse')}}><Link to='/Allcourse' style={{textDecoration:'none', color: 'white'}}>ALL COURSES</Link> {menu==='Allcourse'? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu('FQA')}}><Link to='/FQA' style={{textDecoration:'none', color: 'white'}}>FAQ</Link> {menu==='FQA'? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu('Blog')}}><Link to='/Blog' style={{textDecoration:'none', color: 'white'}}>BLOG</Link> {menu==='Blog'? <hr/>:<></>} </li>
        

      </ul>
      <div className='nav-login-btn'>
        <button>Login</button>

      </div>
    </div>
  )
}

export default Navbar