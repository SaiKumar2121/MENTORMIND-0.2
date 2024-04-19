import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Category from './Pages/Category';
// import FAQ from './Pages/FQA';
import Blog from './Pages/Blog';
import Footer from './Components/Footer/Footer';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import MemberShip from './Pages/MemberShip';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }}>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Category/*' element={<Category />} />
          <Route path='/course/:id' element={<CourseDetails />} />
          <Route path='/membership' element={<MemberShip />} />
          {/* <Route path='/FQA' element={<FAQ />} /> */}
          <Route path='/Blog' element={<Blog />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
};

export default App;
