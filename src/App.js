import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'


const App = () => {
  return (
    <div>
      
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element = {<Home/>}/>
       </Routes>
       
       </BrowserRouter>
    </div>
  )
}

export default App