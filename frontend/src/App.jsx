import React, { use, useEffect, useState } from 'react';
import { Form, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home"
import Login from './components/Login';
import Signup from './components/Signup';
// import Contact from './components/Contact';
import ContactPage from './pages/ContactPage';

import CarsPage from './pages/CarsPage';
import CarDetailPage from './pages/CarDetailPage';
import { FaArrowUp } from 'react-icons/fa';


const ProtectedRoute=({children})=>{

  const location = useLocation();
  const authToken=localStorage.getItem("authToken")

  if (!authToken) {
    return (
  <Navigate
    to="/login"
    replace
    state={{ from: location.pathname }}
  />
);
  }
  return children;
}



const App = () => {

const [showButton,setShowButton]=useState(false)
const location =useLocation()
useEffect(()=>{
  window.scrollTo({top:0,left:0,behavior:'smooth'})
},[location.pathname])

useEffect(()=>{
  const handleScroll=()=>setShowButton(window.scrollY > 300);
  window.addEventListener("scroll",handleScroll)
  return ()=> window.removeEventListener("scroll",handleScroll)
},[])

const scrollUp=()=>{
  window.scrollTo({top:0,behavior:'smooth'})
}

  return (
    <>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='/cars' element={<CarsPage></CarsPage>} ></Route>
        <Route path='/cars/:id' element={
          <ProtectedRoute>
            <CarDetailPage></CarDetailPage>
          </ProtectedRoute>
        }></Route>
        
        
      </Routes>

        {
          showButton && (
            <button onClick={scrollUp} className='fixed cursor-pointer buttom-8 right-8 p-3 rounded-full bg-gradient-to-r from-orange-600 to bg-orange-700 text-white shadow-lg transition-colors focus:outline-none'>
              <FaArrowUp size={20}></FaArrowUp>
            </button>
          )
        }
    </>
    
  );
};

export default App;