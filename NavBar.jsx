import React from 'react'
import { data, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';

function NavBar() {
  const navigate= useNavigate();
  const cartData= useSelector((state)=>state.cart.cartArray)
  
  return (
    <div className=''>
      <nav className='bg-white shadow-lg transition-all duration-300'>
      <div className="px-6 flex items-center justify-between py-4">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStq7Ir_PeuX71fRO76vUAmxOqGKZqSb3Yhrw&s' className='h-10 w-10 rounded mr-2'/>
         <div className='hidden md:flex items-center space-x-10'>
          <ul className='flex flex-row z-20 space-x-10 justify-center pl-72 no-underline'>
            <Link to='/' className='text-black '>Home</Link>
            <Link to='/about'  className='text-black'>About</Link>
            <Link to='/gallery'  className='text-black '>Gallery</Link>
            <Link to='/signup'  className='text-black '>SignUp</Link>
            <Link to='/contact' className='text-black'>Contact</Link>
          </ul>
          </div>
          <div className='flex items-center space-x-4'>
          <IoMdCart className='size-12 text-black cursor-pointer' onClick={()=>navigate('/cart')}/><p className='bg-red-400 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 rounded-full absolute -top-1 -right-1 sm:top-1 sm:right-1 flex items-center justify-center text-xs sm:text-sm md:text-base'><span className='p-2'>{cartData?.length}</span></p>
            <span><Link to="/login" className='bg-blue-700 rounded p-2 hover:bg-blue-600 no-underline text-white'>Login</Link></span>
          </div>
        
        </div>
      </nav>
      </div>
  )
}

export default NavBar
