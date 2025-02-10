import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import './App.css'
import Signup from './Signup'
import Login from './Login'
import Cart from './Cart'
import Practice from './Practice'
import Footer from './Footer'
import Services from './Services'
import Responsive from './Responsive'

function App() {
  const[open,setOpen]=useState()
  return (
    <div>
      
          
      
        <Practice/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
         <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart/gallery' element={<Cart/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
        
      
<Footer/>
    </div>
  )
}

export default App