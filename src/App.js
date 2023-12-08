import React from 'react'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Category from './Pages/Category'
import FAQ from './Pages/FQA'
import AllCourses from './Pages/AllCourses'
import Blog from './Pages/Blog'
import Footer from './Components/Footer/Footer'
import CourseDeatils from './Pages/CourseDeatils'


const App = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }}>
      
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Category' element={<Category/>}/> 
        <Route path='/Category/CourseDeatils' element={<CourseDeatils/>}/>
        <Route path='/Allcourse' element={<AllCourses/>}/> 
        <Route path='/FQA' element={<FAQ/>}/> 
        <Route path='/Blog' element={<Blog/>}/> 
       </Routes>
       <Footer/>
       
       </BrowserRouter>
    </div>
  )
}

export default App