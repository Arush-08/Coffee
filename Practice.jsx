import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Responsive from './Responsive';
import Gallery from './coffe.json'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';

function Practice() {
  const[open,setOpen]=useState()

  const[data,setData]=useState()
  const navigate= useNavigate();
  const cartData= useSelector((state)=>state.cart.cartArray)
  const getData=(e)=>{
    console.log(e.target.value)
    setData(e.target.value)
  }
 

  return (
   
      <>
         <nav>
          <div className='mx-auto px-4 py-2 flex flex-wrap items-center justify-between bg-white shadow-2xl mt-1'> 
            <div className='flex items-center gap-2 text-2xl font-bold'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStq7Ir_PeuX71fRO76vUAmxOqGKZqSb3Yhrw&s' className='size-14'></img>
              <span onClick={()=>navigate('/')}>Arsu CoFFee</span>
            </div>
            <div className='hidden md:flex space-x-6'>
              <Link to='/' className='text-lg font-semibold text-black hover:text-gray-600'>Home</Link>
              <Link to='/about' className='text-lg font-semibold text-black hover:text-gray-600'>About</Link>
              <Link to='/gallery' className='text-lg font-semibold text-black hover:text-gray-600'>Gallery</Link>
              <Link to='/signup' className='text-lg font-semibold text-black hover:text-gray-600'>SignUp</Link>
            </div>
            <div className='hidden md:flex items-center space-x-4 gap-4'>
              <button className='text-2xl font-semibold  border-2 p-2 bg-black text-white'><Link to='/login'>Login</Link></button>
              <input type='text' placeholder='search coffee,juice....' onChange={getData} className='bg-slate-400 text-white h-4 p-2 gap-0 border-2 border-black'/><span className=''><FaSearch/></span>
            </div>
            <div className='flex flex-row   items-center gap-4'>
          <div onClick={()=>setOpen(!open)}
            className='md:hidden text-2xl'>
            <GiHamburgerMenu/>
            </div>
          </div>
                 <div>
                   <IoMdCart className='size-12 text-black cursor-pointer' onClick={()=>navigate('/cart')}/><p className='bg-red-400 h-7 w-7 rounded-full absolute top-2 '><span className='p-2'>{cartData?.length}</span></p>
                 </div>
            </div>
       
         </nav>
         <Responsive open={open} setOpen={setOpen}/>
       
      </>
   
  )
}

export default Practice
